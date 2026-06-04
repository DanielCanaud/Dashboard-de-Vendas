import { recentTransactions } from "@/data/transactions";
import { formatCurrency, formatDate } from "@/utils/formatting";
import { Badge } from "@/components/ui/Badge";
import { TransactionStatus } from "@/types/transaction";

const statusMap: Record<TransactionStatus, { label: string; variant: "completed" | "pending" | "cancelled" }> = {
  completed: { label: "Concluído", variant: "completed" },
  pending: { label: "Pendente", variant: "pending" },
  cancelled: { label: "Cancelado", variant: "cancelled" },
};

export default function TransactionsTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <h2 className="text-lg font-bold text-slate-900">Transações Recentes</h2>
        <p className="text-sm text-slate-500">Últimas movimentações financeiras do sistema</p>
      </div>
      

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[600px]">
          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 whitespace-nowrap">ID Transação</th>
              <th className="px-6 py-4 whitespace-nowrap">Cliente</th>
              <th className="px-6 py-4 whitespace-nowrap">Data</th>
              <th className="px-6 py-4 whitespace-nowrap">Valor</th>
              <th className="px-6 py-4 whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {recentTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-900">{transaction.customerName}</span>
                    <span className="text-slate-500 text-xs">{transaction.customerEmail}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 whitespace-nowrap capitalize">
                  {formatDate(transaction.date)}
                </td>
                <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                  {formatCurrency(transaction.amount)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant={statusMap[transaction.status].variant}>
                    {statusMap[transaction.status].label}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}