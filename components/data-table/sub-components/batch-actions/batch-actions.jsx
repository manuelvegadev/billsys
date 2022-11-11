import { TableBatchAction, TableBatchActions } from "@carbon/react";

/**
 * @param {batchAction[]} batchActions
 * @param {*} batchActionProps
 * @param {*} selectedRows
 * */
export function BatchActions({ batchActions, batchActionProps, selectedRows }) {
  return batchActions?.length > 0 ? (
    <TableBatchActions {...batchActionProps}>
      {batchActions.map(({ renderIcon, onClick, title }, index) => (
        <TableBatchAction
          key={index}
          tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
          renderIcon={renderIcon}
          onClick={() => onClick ?? onClick(selectedRows)}
        >
          {title}
        </TableBatchAction>
      ))}
    </TableBatchActions>
  ) : null;
}

export default BatchActions;
