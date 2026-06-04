import { Menu, Search, Bell, User } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm md:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="text-slate-500 hover:text-slate-900 lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>

        <div className="hidden relative md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Buscar..."
            className="h-10 w-64 rounded-full border border-slate-300 bg-slate-50 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            aria-label="Campo de busca"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          className="relative text-slate-500 hover:text-slate-900 focus:outline-none"
          aria-label="Notificações"
        >
          <Bell size={24} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        <button 
          className="flex items-center gap-2 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-haspopup="true"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 border border-slate-300 overflow-hidden">
            <User size={20} className="text-slate-500" />
          </div>
          <span className="hidden text-sm font-medium md:block">Admin</span>
        </button>
      </div>
    </header>
  );
}