import { useEffect, useId, useState } from "react";
import { Stack, TextInput, Tile } from "@carbon/react";
import { Add, Edit } from "@carbon/icons-react";
import { useModal } from "../../contexts";
import { DataTable, DateInput, Form } from "../../components";
import { InvoiceItemForm } from "../invoice-item-form";
import { currencyFormat, getCurrentDateString } from "../../utils";
import {
  getInvoiceDiscounts,
  getInvoiceItemsRows,
  getInvoiceSubTotal,
} from "./invoice-form.utils";

/** @returns {InvoiceFormProps} */
export const getInvoiceFormDefaultParams = () => ({
  invoice: {
    title: "New invoice",
    number: -1,
    date: getCurrentDateString(),
  },
  invoice_items: [],
});

/** @type {InvoiceFormType} */
export const InvoiceForm = ({
  invoice = getInvoiceFormDefaultParams().invoice,
  invoice_items = getInvoiceFormDefaultParams().invoice_items,
  onSuccess,
}) => {
  const prefixId = useId();
  const { setModal, openModal } = useModal();

  const [titleValue, setTitleValue] = useState(invoice.title);
  const [dateValue, setDateValue] = useState(invoice.date);
  const [invoiceItems, setInvoiceItems] = useState(invoice_items);

  /** @type {tableHeader[]} */
  const itemsTableHeaders = [
    { key: "end_date", header: "End date" },
    { key: "task", header: "Task" },
    { key: "cost", header: "Cost" },
  ];

  const subtotal = getInvoiceSubTotal(invoiceItems);
  const totalDiscounts = getInvoiceDiscounts(invoiceItems);
  const total = subtotal - totalDiscounts;

  useEffect(() => {
    document.getElementById(prefixId + "title").focus();
  }, []);

  return (
    <Form
      onSubmit={() => {
        return new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      }}
      submitButtonText={"Create invoice"}
      onSuccess={function () {
        if (onSuccess)
          onSuccess({
            invoice: {
              title: titleValue,
              number: invoice.number,
              date: dateValue,
            },
            invoice_items: invoiceItems,
          });
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Stack gap={5}>
            <TextInput
              id={prefixId + "title"}
              labelText={"Title"}
              size={"lg"}
              defaultValue={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              disabled={isSubmitting}
            />
            <DateInput
              id={prefixId + "date"}
              label={"Date"}
              value={dateValue}
              onChange={(value) => setDateValue(value)}
              disabled={isSubmitting}
            />
            <div>
              <span className={"cds--label"}>Invoice items</span>
              <DataTable
                headers={itemsTableHeaders}
                rows={getInvoiceItemsRows(invoiceItems)}
                addButton={{
                  title: "Add item",
                  renderIcon: Add,
                  action() {
                    setModal({
                      heading: "Add Invoice Item",
                      label: "Create Invoice",
                      form: (
                        <InvoiceItemForm
                          onSuccess={(item) => {
                            setInvoiceItems((invoiceItems) => {
                              const newInvoiceItems = [...invoiceItems];
                              newInvoiceItems.push(item);
                              return newInvoiceItems;
                            });
                          }}
                        />
                      ),
                    });
                    openModal();
                  },
                }}
                rowOptions={{
                  renderIcon: Edit,
                  action: (row) => {
                    const itemIndex = invoiceItems.findIndex(
                      ({ id }) => id === row.id
                    );
                    setModal({
                      heading: "Edit Invoice Item",
                      label: "Create Invoice",
                      form: (
                        <InvoiceItemForm
                          item={invoiceItems[itemIndex]}
                          onSuccess={(item) => {
                            setInvoiceItems((invoiceItems) => {
                              const newInvoiceItems = [...invoiceItems];
                              newInvoiceItems[itemIndex] = item;
                              return newInvoiceItems;
                            });
                          }}
                        />
                      ),
                    });
                    openModal();
                  },
                  hoverText: "Click to edit",
                }}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <span className={"cds--label"}>Billing</span>
              <Tile>
                <Stack gap={3}>
                  <h4>{titleValue}</h4>
                  <div style={{ color: "var(--cds-text-secondary)" }}>
                    <span className={"cds--label"}>Subtotal</span>
                    <br />
                    <span>{currencyFormat(subtotal)}</span>
                  </div>
                  <div style={{ color: "var(--cds-text-secondary)" }}>
                    <span className={"cds--label"}>Discount</span>
                    <br />
                    <span>{currencyFormat(totalDiscounts)}</span>
                  </div>
                  <hr />
                  <div>
                    <span className={"cds--label"}>Total</span>
                    <h2>{currencyFormat(total)}</h2>
                  </div>
                </Stack>
              </Tile>
            </div>
          </Stack>
        );
      }}
    </Form>
  );
};

export default InvoiceForm;
