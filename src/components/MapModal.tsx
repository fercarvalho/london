import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal = ({ isOpen, onClose }: MapModalProps) => {
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
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:max-w-4xl md:h-[80vh] bg-background border border-white/10 rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-text-primary">Nossa Localização</h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full glass hover:bg-brand-blue/20 flex items-center justify-center transition-all group"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5 text-text-secondary group-hover:text-brand-blue" />
              </button>
            </div>

            {/* Map Content */}
            <div className="w-full h-[calc(100%-80px)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.8507469688345!2d-51.176619!3d-23.3120859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ebc07b0c2b7c7f%3A0x5c5e5c5e5c5e5c5e!2sAv.%20Maring%C3%A1%2C%202300%20-%20Jardim%20Petr%C3%B3polis%2C%20Londrina%20-%20PR%2C%2086060-000!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-3xl"
                title="Mapa London Seguros"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
