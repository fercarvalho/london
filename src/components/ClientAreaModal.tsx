import { X, Construction } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ClientAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientAreaModal = ({ isOpen, onClose }: ClientAreaModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-background border border-white/10 rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-text-primary">Área do Cliente</h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full glass hover:bg-brand-blue/20 flex items-center justify-center transition-all group"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5 text-text-secondary group-hover:text-brand-blue" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <Construction className="w-10 h-10 text-brand-blue" />
                </div>
              </div>

              <h4 className="text-2xl font-bold text-text-primary mb-4">Área em Construção</h4>

              <p className="text-text-secondary leading-relaxed mb-6">
                Em breve você poderá acessar suas informações diretamente em nosso site.
              </p>

              <p className="text-sm text-text-muted mb-8">
                Estamos trabalhando para trazer uma experiência completa e segura para você gerenciar suas apólices e informações.
              </p>

              <button
                onClick={onClose}
                className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_10px_20px_rgba(59,130,246,0.2)]"
              >
                Entendi
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
