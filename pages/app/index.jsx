import Head from "next/head";
import { Heading } from "@carbon/react";
import { Layout } from "../../components";

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

export default HomePage;
