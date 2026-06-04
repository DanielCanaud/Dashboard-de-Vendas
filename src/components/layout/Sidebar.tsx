import Link from "next/link";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Settings, 
  X 
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Vendas", href: "#", icon: ShoppingCart },
    { name: "Relatórios", href: "#", icon: BarChart3 },
    { name: "Clientes", href: "#", icon: Users },
    { name: "Configurações", href: "#", icon: Settings },
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <BarChart3 size={24} />
            </div>
            <span className="text-xl font-bold text-slate-900">DashPro</span>
          </Link>
          <button 
            onClick={onClose} 
            className="lg:hidden text-slate-500 hover:text-slate-900 focus:outline-none"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
              >
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}