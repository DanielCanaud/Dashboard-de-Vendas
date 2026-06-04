export interface Metric {
    id: string;
    title: string;
    value: string;
    change: number; 
    isPositive: boolean;
    icon: "revenue" | "sales" | "customers" | "conversion";
  }