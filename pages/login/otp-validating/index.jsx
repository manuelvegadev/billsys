import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "../../../components";
import { Heading } from "@carbon/react";

export function OtpValidatingPage() {
  const router = useRouter();
  const { session } = useSessionContext();

  useEffect(() => {
    (async () => {
      if (session) await router.replace("/login/otp-success");
    })();
  }, [session]);

  return (
    <Layout type={"minimal"}>
      <Heading>Validating...</Heading>
    </Layout>
  );
}

export default OtpValidatingPage;
