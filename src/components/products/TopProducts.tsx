"use client";

import { motion } from "framer-motion";
import { topProducts } from "@/data/products";

export default function TopProducts() {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Top Produtos</h2>
          <p className="text-sm text-slate-500">Mais vendidos no mês</p>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        {topProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative"
          >
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                {product.name}
              </span>
              <span className="font-semibold text-slate-700">
                {formatCurrency(product.revenue)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${product.percentage}%` }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-blue-600"
                />
              </div>
              <span className="w-10 text-right text-xs font-medium text-slate-500">
                {product.sales} un
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}