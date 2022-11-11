import {
  Table as TableCarbon,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
} from "@carbon/react";
import styles from "./table.module.scss";
import clsx from "clsx";

/**
 * @param {tableHeader[]} headers
 * @param {*} rows
 * @param {rowOptions} rowOptions
 * @param {*} getTableProps
 * @param {*} getHeaderProps
 * @param {*} getRowProps
 * @param {*} getSelectionProps
 * @param {batchAction[]} [batchActions]
 * @param {Object} [row]
 * @param {boolean} disabled
 * */
export function Table({
  headers,
  rows,
  rowOptions,
  getTableProps,
  getHeaderProps,
  getRowProps,
  getSelectionProps,
  batchActions,
  row,
  disabled,
}) {
  return (
    <TableCarbon {...getTableProps()}>
      <TableHead>
        <TableRow>
          {batchActions?.length > 0 ? (
            <TableSelectAll {...getSelectionProps()} />
          ) : null}
          {headers.map((header, i) => (
            <TableHeader key={i} {...getHeaderProps({ header })}>
              {header.header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.length > 0 ? (
          rows.map((row, index) => {
            const shouldRenderActionIcon =
              rowOptions?.action && rowOptions?.renderIcon && !disabled;
            return (
              <TableRow
                key={index}
                {...getRowProps({ row })}
                className={clsx({
                  [styles["table__row--actionable"]]: shouldRenderActionIcon,
                })}
              >
                {batchActions?.length > 0 ? (
                  <TableSelectRow {...getSelectionProps({ row })} />
                ) : null}
                {row.cells.map((cell) => {
                  return (
                    <TableCell
                      key={cell.id}
                      onClick={() => {
                        shouldRenderActionIcon ? rowOptions.action(row) : null;
                      }}
                      title={rowOptions?.hoverText || ""}
                      onMouseEnter={(event) => {
                        event.target.parentElement.classList.add(
                          styles["table__row--actionable--hover"]
                        );
                      }}
                      onMouseLeave={(event) => {
                        event.target.parentElement.classList.remove(
                          styles["table__row--actionable--hover"]
                        );
                      }}
                    >
                      {cell.value}
                    </TableCell>
                  );
                })}
                {shouldRenderActionIcon ? (
                  <td className={styles["table__row--actionable__icon"]}>
                    <rowOptions.renderIcon size={20} />
                  </td>
                ) : null}
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell colSpan={headers.length} style={{ textAlign: "center" }}>
              <em>(Nothing to show)</em>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </TableCarbon>
  );
}

export default Table;
