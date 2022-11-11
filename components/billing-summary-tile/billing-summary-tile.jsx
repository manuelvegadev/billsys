import { Stack, Tile } from "@carbon/react";
import { currencyFormat, numberFormat } from "../../utils";

/** @type {BillingSummaryTileType} */
export const BillingSummaryTile = ({ item, unitValue, quantity, discount }) => {
  return (
    <Tile>
      <Stack gap={3}>
        <span>
          <strong>
            {item} {quantity > 1 ? `(x${quantity})` : null}
          </strong>
        </span>
        <div style={{ color: "var(--cds-text-secondary)" }}>
          <span className={"cds--label"}>Subtotal</span>
          <br />
          <span>{currencyFormat(unitValue * quantity)}</span>
        </div>
        <div style={{ color: "var(--cds-text-secondary)" }}>
          <span className={"cds--label"}>Discount</span>
          <br />
          <span>
            {currencyFormat(discount * quantity)} (-
            {numberFormat((discount * 100) / unitValue)}%)
          </span>
        </div>
        <hr />
        <div>
          <span className={"cds--label"}>Total</span>
          <h2>{currencyFormat(unitValue * quantity - discount * quantity)}</h2>
        </div>
      </Stack>
    </Tile>
  );
};

export default BillingSummaryTile;
