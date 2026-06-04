import { Metric } from "../types/metrics";

export const metricsData: Metric[] = [
  {
    id: "m1",
    title: "Receita Total",
    value: "R$ 124.563,00",
    change: 12.5,
    isPositive: true,
    icon: "revenue",
  },
  {
    id: "m2",
    title: "Vendas",
    value: "1.423",
    change: 8.2,
    isPositive: true,
    icon: "sales",
  },
  {
    id: "m3",
    title: "Novos Clientes",
    value: "384",
    change: 2.4,
    isPositive: false,
    icon: "customers",
  },
  {
    id: "m4",
    title: "Conversão",
    value: "4.2%",
    change: 1.1,
    isPositive: true,
    icon: "conversion",
  },
];