export function formatNumber(value: number) { return new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(value); }
