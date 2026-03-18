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
      <ClientAreaModal
        isOpen={isClientAreaModalOpen}
        onClose={() => setIsClientAreaModalOpen(false)}
      />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-brand-blue" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-text-primary">LONDON</span>
            <span className="text-[9px] font-semibold text-text-muted tracking-widest uppercase">Garantindo suas conquistas</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="#inicio" className="hover:text-text-primary transition-colors">Início</a>
          <a href="#servicos" className="hover:text-text-primary transition-colors">Seguros</a>
          <a href="#sobre" className="hover:text-text-primary transition-colors">Sobre</a>
          <a href="#seguradoras" className="hover:text-text-primary transition-colors">Seguradoras</a>
          <a href="#depoimentos" className="hover:text-text-primary transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-text-primary transition-colors">Contato</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-text-secondary"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsClientAreaModalOpen(true)}
            className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Área do Cliente
          </button>
        </div>
      </motion.div>
    </nav>
    </>
  );
};
