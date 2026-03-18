import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useState } from 'react';
import { ClientAreaModal } from './ClientAreaModal';

export const Navbar = () => {
  const [isClientAreaModalOpen, setIsClientAreaModalOpen] = useState(false);

  return (
    <>
      <ClientAreaModal
        isOpen={isClientAreaModalOpen}
        onClose={() => setIsClientAreaModalOpen(false)}
      />
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-brand-blue" />
          <span className="text-xl font-bold tracking-tight text-text-primary">LONDON</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="#inicio" className="hover:text-text-primary transition-colors">Início</a>
          <a href="#servicos" className="hover:text-text-primary transition-colors">Seguros</a>
          <a href="#sobre" className="hover:text-text-primary transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-text-primary transition-colors">Contato</a>
        </div>

        <button
          onClick={() => setIsClientAreaModalOpen(true)}
          className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
        >
          Área do Cliente
        </button>
      </motion.div>
    </nav>
    </>
  );
};
