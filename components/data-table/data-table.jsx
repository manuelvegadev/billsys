import {
  DataTable as DataTableCarbon,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from "@carbon/react";
import {
  AddButton,
  BatchActions,
  Table,
  ToolbarActions,
} from "./sub-components";

/**
 * @param {tableHeader[]} headers
 * @param {tableRow[]} rows
 * @param {rowOptions} [rowOptions]
 * @param {batchAction[]} [batchActions]
 * @param {toolbarAction[]} [toolbarActions]
 * @param {size} [size='md']
 * @param {addButton} [addButton]
 * @param {boolean} [disabled]
 * */
export function DataTable({
  headers,
  rows,
  rowOptions,
  batchActions,
  toolbarActions,
  size = "md",
  addButton,
  disabled = false,
}) {
  return (
    <DataTableCarbon rows={rows} headers={headers} isSortable size={size}>
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
        getToolbarProps,
        getBatchActionProps,
        onInputChange,
        selectedRows,
        getTableProps,
        getTableContainerProps,
      }) => {
        const batchActionProps = getBatchActionProps(),
          { shouldShowBatchActions } = batchActionProps;
        return (
          <TableContainer {...getTableContainerProps()}>
            <TableToolbar {...getToolbarProps()}>
              <BatchActions
                batchActions={batchActions}
                batchActionProps={batchActionProps}
                selectedRows={selectedRows}
              />
              <TableToolbarContent aria-hidden={shouldShowBatchActions}>
                <TableToolbarSearch
                  tabIndex={shouldShowBatchActions ? -1 : 0}
                  onChange={onInputChange}
                />
                <ToolbarActions
                  toolbarActions={toolbarActions}
                  selectedRows={selectedRows}
                  batchActionProps={batchActionProps}
                />
                <AddButton
                  addButton={addButton}
                  batchActionProps={batchActionProps}
                  selectedRows={selectedRows}
                  size={size}
                  disabled={disabled}
                />
              </TableToolbarContent>
            </TableToolbar>
            <Table
              headers={headers}
              rows={rows}
              getTableProps={getTableProps}
              getHeaderProps={getHeaderProps}
              getRowProps={getRowProps}
              getSelectionProps={getSelectionProps}
              batchActions={batchActions}
              rowOptions={rowOptions}
              disabled={disabled}
            />
          </TableContainer>
        );
      }}
    </DataTableCarbon>
  );
}

export default DataTable;
