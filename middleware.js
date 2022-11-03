import { middlewareAuth, middlewareSupabase } from "./utils";
import { NextResponse } from "next/server";

/**
 * @param {import("next/server").NextRequest} req
 * */
export async function middleware(req) {
  if (req.nextUrl.pathname === "/login") {
    const { supabase } = middlewareSupabase(req);
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) return NextResponse.redirect(req.nextUrl.origin + "/app");
  }

  if (req.nextUrl.pathname.startsWith("/app")) {
    return await middlewareAuth(req, { redirectTo: "/login" });
  }
}
