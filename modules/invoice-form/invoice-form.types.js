/**
 * @typedef {Object} InvoiceFormOnSuccessProps
 * @property {InvoiceType} invoice
 * @property {InvoiceItemType[]} invoice_items
 * */

/**
 * @typedef {Function} InvoiceFormOnSuccessProp
 * @param {InvoiceFormOnSuccessProps} props
 * @returns {void}
 * */

/**
 * @typedef {Object} InvoiceFormProps
 * @property {InvoiceType} [invoice]
 * @property {InvoiceItemType[]} [invoice_items=[]]
 * @property {InvoiceFormOnSuccessProp} [onSuccess]
 * */

/**
 * @typedef {React.FunctionComponent} InvoiceFormType
 * @param {InvoiceFormProps} props
 * @returns {React.ReactNode}
 * */
