import { centsToReais } from "./centsToReais";

export function formatCurrencyBrl(value: number): string {
  const reais = centsToReais(value);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(reais);
}
