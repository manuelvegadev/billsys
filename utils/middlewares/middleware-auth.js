import { NextResponse } from "next/server";
import { middlewareSupabase } from "./middleware-supabase";
import { CookieOptions } from "@supabase/auth-helpers-shared";

/**
 * @typedef {Function} authGuardIsPermitted
 * @param {User} user
 * @param {import('@supabase/supabase-js').SupabaseClient} supabase
 * @return {Promise<Boolean>}
 * */
/**
 * @typedef {Object} middlewareAuthOptions
 * @property {string} [redirectTo]
 * @property {CookieOptions} [cookieOptions]
 * @property {Object} [authGuard]
 * @property {authGuardIsPermitted} [authGuard.isPermitted]
 * @property {string} [authGuard.redirectTo]
 * */

class NoPermissionError extends Error {
  /**
   * @param {string} message
   * */
  constructor(message) {
    super(message);
    this.name = "NoPermissionError";
  }
}

/**
 * @param {import("next/server").NextRequest} req
 * @param {middlewareAuthOptions} options
 * */
export async function middlewareAuth(req, options) {
  try {
    const { supabase, res } = middlewareSupabase(req);

    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw new Error(
        `Authorization error, redirecting to login page: ${error.message}`
      );
    } else if (!session) {
      throw new Error("No auth session, redirecting");
    } else if (
      options.authGuard &&
      !(await options.authGuard.isPermitted(session.user, supabase))
    ) {
      throw new NoPermissionError("User is not permitted, redirecting");
    }

    // Authentication successful, forward request to protected route
    return res;
  } catch (err) {
    let { redirectTo = "/" } = options;
    if (err instanceof Error && !!options?.authGuard?.redirectTo) {
      redirectTo = options.authGuard.redirectTo;
    }
    if (err instanceof Error) {
      console.log(
        `Could not authenticate request, redirecting to ${redirectTo}:`,
        err
      );
    }
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = redirectTo;
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
    // Authentication failed, redirect request
    return NextResponse.redirect(redirectUrl);
  }
}

export default middlewareAuth;
