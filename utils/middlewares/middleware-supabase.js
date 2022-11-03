import { NextRequest, NextResponse } from "next/server";
import {
  createServerSupabaseClient,
  parseCookies,
  serializeCookie,
} from "@supabase/auth-helpers-shared";

import pkg from "../../package.json";

const PKG_NAME = "@supabase/auth-helpers-nextjs";
const PKG_VERSION = pkg.dependencies[PKG_NAME];

/**
 * @param {NextRequest} req
 * */
export function middlewareSupabase(req) {
  const res = NextResponse.next();
  const supabase = createServerSupabaseClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    getCookie(name) {
      const cookies = parseCookies(req.headers.get("cookie") ?? "");
      return cookies[name];
    },
    setCookie(name, value, options) {
      const newSessionStr = serializeCookie(name, value, {
        ...options,
        // Allow supabase-js on the client to read the cookie as well
        httpOnly: false,
      });
      res.headers.append(name, newSessionStr);
    },
    getRequestHeader: (key) => {
      return res.headers.get(key) ?? undefined;
    },
    options: {
      global: {
        headers: {
          "X-Client-Info": `${PKG_NAME}@${PKG_VERSION}`,
        },
      },
    },
    cookieOptions: {},
  });
  return { supabase, res };
}

export default middlewareSupabase;
