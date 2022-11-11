import { Layout } from "../../../components";
import { Heading, Stack } from "@carbon/react";
import { useBreadcrumb } from "../../../contexts";
import { useEffect } from "react";
import { InvoiceForm } from "../../../modules";

/** @type {import("next").NextPage} */
export const NewPage = () => {
  const { setBreadcrumbItems } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbItems([
      { title: "App", href: "/app" },
      { title: "Invoices", href: "/app/invoices" },
      { title: "Create", href: "/app/invoices/new" },
    ]);
  }, []);

  return (
    <Layout>
      <Stack gap={7}>
        <Heading>Create invoice</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          consectetur, deleniti deserunt dolores id inventore ipsum labore
          libero numquam officiis?
        </p>
        <InvoiceForm
          onSuccess={() => {
            console.log("Invoice created successfully!");
          }}
        />
      </Stack>
    </Layout>
  );
};

export default NewPage;
