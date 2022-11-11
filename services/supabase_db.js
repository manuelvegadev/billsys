import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

/**
 * @param {import("next").GetServerSidePropsContext} context
 * @param {import("@supabase/supabase-js").SupabaseClient} [supabaseClient]
 * */
export async function getInvoices({ context, supabaseClient }) {
  supabaseClient =
    supabaseClient || (await createServerSupabaseClient(context));
  const { data } = await supabaseClient.from("invoices").select("*");

  const metadata = await getTableDescription({
    context: context,
    tableName: "invoices",
    supabaseClient,
  });
  return { data, metadata };
}

/**
 * @param {import("next").GetServerSidePropsContext} context
 * @param {import("@supabase/supabase-js").SupabaseClient} [supabaseClient]
 * @param {string} tableName
 * */
export async function getTableDescription({
  context,
  supabaseClient,
  tableName,
}) {
  supabaseClient =
    supabaseClient || (await createServerSupabaseClient(context));
  const { data } = await supabaseClient.rpc("describe_table", {
    table_name: tableName,
  });

  const tableDescription = { columns: [] };

  data.forEach(({ column_name, udt_name, column_default, is_nullable }) => {
    tableDescription.columns.push({
      name: column_name,
      type: udt_name,
      default: column_default,
      required: is_nullable === "NO",
    });
  });

  return tableDescription;
}
