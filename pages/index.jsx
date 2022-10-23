import { Heading } from "@carbon/react";
import Head from "next/head";
import { Layout } from "../components";

function Home() {
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

export default Home;
