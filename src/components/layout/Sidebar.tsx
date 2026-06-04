"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Settings, 
  X 
} from "lucide-react";
import { cn } from "@/utils/cn";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Vendas", href: "/vendas", icon: ShoppingCart },
    { name: "Relatórios", href: "/relatorios", icon: BarChart3 },
    { name: "Clientes", href: "/clientes", icon: Users },
    { name: "Configurações", href: "/configuracoes", icon: Settings },
  ];

  return (
    <>

      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}


      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out flex flex-col lg:translate-x-0 lg:static lg:inset-auto",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200 shrink-0">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <BarChart3 size={24} />
            </div>
            <span className="text-xl font-bold text-slate-900">DashPro</span>
          </Link>
          <button 
            onClick={onClose} 
            className="lg:hidden text-slate-500 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all font-medium",
                  isActive 
                    ? "bg-blue-50 text-blue-700" 
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                )}
              >
                <Icon size={20} className={cn(isActive ? "text-blue-700" : "text-slate-400")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}