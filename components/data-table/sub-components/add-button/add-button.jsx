import { Button } from "@carbon/react";

/**
 * @param {addButton} addButton
 * @param {*} batchActionProps
 * @param {*} selectedRows
 * @param {size} size
 * @param {boolean} [disabled=false]
 * */
export function AddButton({
  addButton,
  batchActionProps,
  selectedRows,
  size,
  disabled = false,
}) {
  return addButton ? (
    <Button
      tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
      onClick={() => addButton.action(selectedRows)}
      size={size}
      kind="primary"
      renderIcon={addButton.renderIcon}
      disabled={disabled}
    >
      {addButton.title}
    </Button>
  ) : null;
}

export default AddButton;
