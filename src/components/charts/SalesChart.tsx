"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { salesChartData } from "@/data/salesChart";


type ChartValue = number | string | readonly (number | string)[] | undefined;
type ChartName = number | string | undefined;

export default function SalesChart() {
  const formatCompactCurrency = (value: number) => 
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);

  const formatFullCurrency = (value: number) => 
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md w-full">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">Receita vs. Meta</h2>
        <p className="text-sm text-slate-500">Desempenho de vendas ao longo do ano</p>
      </div>
      
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={salesChartData} 
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }}
              dy={10}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }}
              tickFormatter={(value: ChartValue) => {
                if (value === undefined) return "";

                const safeValue = Array.isArray(value) ? value[0] : value;
                return formatCompactCurrency(Number(safeValue));
              }}
            />
            
            <Tooltip 
              formatter={(value: ChartValue, name: ChartName) => {
                const safeValue = Array.isArray(value) ? value[0] : value;
                const formattedValue = formatFullCurrency(Number(safeValue || 0));
                const formattedName = String(name) === "revenue" ? "Receita" : "Meta";
                return [formattedValue, formattedName];
              }}
              labelStyle={{ color: '#0f172a', fontWeight: 'bold', marginBottom: '4px' }}
              contentStyle={{ 
                borderRadius: '8px', 
                border: '1px solid #e2e8f0', 
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                backgroundColor: '#ffffff'
              }}
            />
            
            <Legend 
              iconType="circle" 
              wrapperStyle={{ paddingTop: '20px', fontSize: '14px', color: '#64748b' }}
            />
            
            <Area 
              type="monotone" 
              dataKey="target" 
              name="Meta" 
              stroke="#94a3b8" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorTarget)" 
              activeDot={{ r: 6 }}
            />
            
            <Area 
              type="monotone" 
              dataKey="revenue" 
              name="Receita Realizada" 
              stroke="#2563eb" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}