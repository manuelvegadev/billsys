/**
 * @typedef {React.FunctionComponent} ModalFormType
 * @param {ModalFormProps} props
 * @returns {React.ReactNode}
 * */

/**
 * @typedef {Function} ModalFormOnSuccessProp
 * @returns {void}
 * */

/**
 * @typedef {Object} ModalFormProps
 * @property {Function<Promise<*>>} onSubmit
 * @property {ModalFormChildren} children
 * @property {string} primaryButtonText
 * @property {string} secondaryButtonText
 * @property {string} successMessage
 * @property {ModalFormOnSuccessProp} onSuccess
 * */

/**
 * @typedef {Function} ModalFormChildren
 * @param {ModalFormChildrenArguments} props
 * @returns {React.ReactNode}
 * */

/**
 * @typedef {Object} ModalFormChildrenArguments
 * @property {boolean} isSubmitting
 * @property {boolean} success
 * @property {boolean} error
 * */
