export function numberFormat(number) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "decimal",
  });
  return formatter.format(number);
}

export function currencyFormat(number) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
  return formatter.format(number);
}
