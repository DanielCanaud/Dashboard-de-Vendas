"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Activity 
} from "lucide-react";
import { Metric } from "@/types/metrics";
import { useCountAnimation } from "@/hooks/useCountAnimation";

const iconMap = {
  revenue: DollarSign,
  sales: ShoppingBag,
  customers: Users,
  conversion: Activity,
};

interface MetricCardProps {
  metric: Metric;
  index: number;
}

export default function MetricCard({ metric, index }: MetricCardProps) {
  const Icon = iconMap[metric.icon];
  const animatedValue = useCountAnimation(metric.value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
      className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{metric.title}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <Icon size={20} strokeWidth={2.5} aria-hidden="true" />
        </div>
      </div>
      
      <div className="mt-4 flex items-baseline gap-4">
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          {animatedValue}
        </h3>
      </div>
      
      <div className="mt-2 flex items-center gap-2">
        <span 
          className={`flex items-center text-sm font-semibold ${
            metric.isPositive ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {metric.isPositive ? (
            <TrendingUp size={16} className="mr-1" aria-hidden="true" />
          ) : (
            <TrendingDown size={16} className="mr-1" aria-hidden="true" />
          )}
          {metric.change}%
        </span>
        <span className="text-sm text-slate-500">vs. mês passado</span>
      </div>
    </motion.div>
  );
}