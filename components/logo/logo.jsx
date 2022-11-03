import { Currency } from "@carbon/icons-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      style={{
        color: "inherit",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        margin: "0 .5rem",
        gap: ".25rem",
        backgroundColor: "rgba(255,255,255,.125)",
        padding: ".25rem .35rem .25rem .25rem",
        borderRadius: ".25rem",
        lineHeight: 0,
      }}
    >
      <Currency size={20} /> Billsys
    </Link>
  );
}

export default Logo;
