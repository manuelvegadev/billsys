/**
 * @param {InvoiceItemType[]} items
 * @returns {tableRow[]}
 * */
import { currencyFormat, formatDate } from "../../utils";

export const getInvoiceItemsRows = (items) => {
  return items.map(({ id, discount, unit_value, quantity, task, end_date }) => {
    return {
      id,
      end_date: formatDate(end_date),
      task,
      cost: currencyFormat((unit_value - discount) * quantity),
    };
  });
};

/**
 * @param {InvoiceItemType[]} items
 * @returns {number}
 * */
export const getInvoiceSubTotal = (items) => {
  if (items.length > 0) {
    return items
      .map((item) => item.unit_value * item.quantity)
      .reduce((a, b) => a + b);
  } else {
    return 0;
  }
};

/**
 * @param {InvoiceItemType[]} items
 * @returns {number}
 * */
export const getInvoiceDiscounts = (items) => {
  if (items.length > 0) {
    return items
      .map((item) => {
        return item.discount * item.quantity;
      })
      .reduce((a, b) => {
        return a + b;
      });
  } else {
    return 0;
  }
};
