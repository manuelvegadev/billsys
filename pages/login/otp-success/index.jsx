import { Layout } from "../../../components";
import { Heading, Stack } from "@carbon/react";

export function otpSuccessPage() {
  return (
    <Layout type={"minimal"}>
      <Stack gap={7}>
        <Heading>Logged successfully!</Heading>
        <p>Now you can close this tab and continue on the another one.</p>
      </Stack>
    </Layout>
  );
}

export default otpSuccessPage;
