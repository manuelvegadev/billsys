import { Button, Heading, Stack } from "@carbon/react";
import { Layout } from "../components";
import { useRouter } from "next/router";
import { Login } from "@carbon/icons-react";

/** @type {import('next').NextPage} */
export function IndexPage() {
  const router = useRouter();
  return (
    <Layout type={"minimal"}>
      <Stack gap={7}>
        <Heading>Home Page</Heading>
        <Button
          type={"button"}
          onClick={async () => {
            await router.push("/login");
          }}
          renderIcon={Login}
        >
          Login
        </Button>
      </Stack>
    </Layout>
  );
}

export default IndexPage;
