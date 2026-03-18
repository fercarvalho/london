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
                src="https://maps.google.com/maps?q=London+Seguros,+Av.+Maringá+2300,+Londrina+PR&t=m&z=16&ie=UTF8&iwloc=B&output=embed"
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
