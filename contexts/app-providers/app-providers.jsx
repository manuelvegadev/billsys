import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { BreadcrumbContextProvider } from "./breadcrumb-provider";

export function AppProviders({ children, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <BreadcrumbContextProvider>{children}</BreadcrumbContextProvider>
    </SessionContextProvider>
  );
}
