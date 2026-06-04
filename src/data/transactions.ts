import { Transaction } from "../types/transaction";

export const recentTransactions: Transaction[] = [
  {
    id: "TRX-001",
    customerName: "Ana Silva",
    customerEmail: "ana.silva@email.com",
    date: "2024-05-20T14:30:00Z",
    amount: 12500.00,
    status: "completed",
  },
  {
    id: "TRX-002",
    customerName: "Carlos Eduardo",
    customerEmail: "carlos.ed@email.com",
    date: "2024-05-19T09:15:00Z",
    amount: 850.50,
    status: "pending",
  },
  {
    id: "TRX-003",
    customerName: "Mariana Costa",
    customerEmail: "mari.costa@email.com",
    date: "2024-05-18T16:45:00Z",
    amount: 4200.00,
    status: "completed",
  },
  {
    id: "TRX-004",
    customerName: "João Pedro",
    customerEmail: "joao.p@email.com",
    date: "2024-05-18T11:20:00Z",
    amount: 150.00,
    status: "cancelled",
  },
  {
    id: "TRX-005",
    customerName: "Beatriz Santos",
    customerEmail: "bia.santos@email.com",
    date: "2024-05-17T10:05:00Z",
    amount: 7000.00,
    status: "completed",
  },
];