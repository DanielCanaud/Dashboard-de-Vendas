import { metricsData } from "@/data/metrics";
import MetricCard from "@/components/metrics/MetricCard";
import SalesChart from "@/components/charts/SalesChart";
import TopProducts from "@/components/products/TopProducts";
import TransactionsTable from "@/components/transactions/TransactionsTable";

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Visão Geral</h1>
        <p className="text-sm text-slate-500 mt-1">
          Acompanhe suas principais métricas e resultados.
        </p>
      </div>


      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metricsData.map((metric, index) => (
          <MetricCard key={metric.id} metric={metric} index={index} />
        ))}
      </div>


      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="lg:col-span-1">
          <TopProducts />
        </div>
      </div>


      <div>
        <TransactionsTable />
      </div>
    </div>
  );
}