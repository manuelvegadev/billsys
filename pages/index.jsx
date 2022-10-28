import Head from "next/head";
import { Heading } from "@carbon/react";
import { Layout } from "../components";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

function HomePage() {
  return (
    <>
      <Head>
        <title>Billsys</title>
      </Head>
      <Layout>
        <Heading>Billsys</Heading>
      </Layout>
    </>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });

export default HomePage;
