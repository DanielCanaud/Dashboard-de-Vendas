export type TransactionStatus = "completed" | "pending" | "cancelled";

export interface Transaction {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string; 
  amount: number;
  status: TransactionStatus;
}