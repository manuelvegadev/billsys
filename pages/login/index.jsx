import { LoginForm } from "../../modules";
import { Layout } from "../../components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSessionContext } from "@supabase/auth-helpers-react";

export function LoginPage({ query }) {
  const router = useRouter();
  const { session } = useSessionContext();
  const redirectTo = query["redirectedFrom"] || "/app";

  useEffect(() => {
    (async () => {
      if (session) await router.push(redirectTo);
    })();
  }, [session]);

  return (
    <Layout type={"minimal"}>
      <LoginForm redirectTo={redirectTo} />
    </Layout>
  );
}

export function getServerSideProps({ query }) {
  return {
    props: {
      query,
    },
  };
}

export default LoginPage;
