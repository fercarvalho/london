import { motion } from 'framer-motion';
import { Shield, Search } from 'lucide-react';
import { useState } from 'react';
import { ClientAreaModal } from './ClientAreaModal';
import { SearchModal } from './SearchModal';

export const Navbar = () => {
  const [isClientAreaModalOpen, setIsClientAreaModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <ClientAreaModal isOpen={isClientAreaModalOpen} onClose={() => setIsClientAreaModalOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="glass flex items-center justify-between w-full max-w-5xl px-5 py-2.5 rounded-2xl shadow-sm"
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
              <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-bold tracking-tight text-text-primary">LONDON</span>
              <span className="text-[8px] font-medium text-text-muted tracking-[0.18em] uppercase">Garantindo suas conquistas</span>
            </div>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1 text-[13px] font-medium text-text-secondary">
            {[
              ['Início', '#inicio'],
              ['Seguros', '#servicos'],
              ['Sobre', '#sobre'],
              ['Seguradoras', '#seguradoras'],
              ['Depoimentos', '#depoimentos'],
              ['Contato', '#contato'],
            ].map(([label, href]) => (
              <a key={href} href={href}
                className="px-3 py-1.5 rounded-lg hover:text-text-primary hover:bg-foreground/[0.05] transition-all duration-150">
                {label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-foreground/[0.06] transition-all"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsClientAreaModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[13px] font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
            >
              Área do Cliente
            </button>
          </div>
        </motion.div>
      </nav>
    </>
  );
};
