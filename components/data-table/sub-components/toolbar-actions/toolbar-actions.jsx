import { TableToolbarAction, TableToolbarMenu } from "@carbon/react";

/**
 * @param {toolbarAction[]} toolbarActions
 * @param {*} batchActionProps
 * @param {*} selectedRows
 * */
export function ToolbarActions({
  toolbarActions,
  batchActionProps,
  selectedRows,
}) {
  return toolbarActions?.length > 0 ? (
    <TableToolbarMenu
      tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
      iconDescription={"Actions"}
    >
      {toolbarActions.map(
        ({ title, action, renderIcon: RenderIcon }, index) => (
          <TableToolbarAction onClick={() => action(selectedRows)} key={index}>
            {RenderIcon ? (
              <span
                style={{
                  display: "flex",
                  gap: ".5em",
                  alignItems: "center",
                }}
              >
                <RenderIcon />
                {title}
              </span>
            ) : (
              title
            )}
          </TableToolbarAction>
        )
      )}
    </TableToolbarMenu>
  ) : null;
}

export default ToolbarActions;
