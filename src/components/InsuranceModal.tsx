import { useEffect, useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export interface InsuranceDetail {
  title: string;
  image: string;
  description: string;
  faq: { question: string; answer: string }[];
}

interface Props {
  data: InsuranceDetail | null;
  onClose: () => void;
}

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-current/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-foreground/5 transition-colors"
      >
        <span className="text-text-primary font-semibold text-sm pr-4">{question}</span>
        {open ? <ChevronUp className="w-4 h-4 text-brand-blue shrink-0" /> : <ChevronDown className="w-4 h-4 text-text-muted shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-text-secondary text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const InsuranceModal = ({ data, onClose }: Props) => {
  useEffect(() => {
    if (!data) return;
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-background border border-current/10 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden rounded-t-3xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-brand-blue transition-all"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <div className="absolute bottom-4 left-6">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/90 text-white text-[10px] font-bold tracking-widest uppercase mb-1">
              London Seguros
            </div>
            <h3 className="text-2xl font-black text-text-primary">{data.title}</h3>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">O que é?</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{data.description}</p>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">Perguntas Frequentes</h4>
            <div className="space-y-2">
              {data.faq.map(item => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>

          <a
            href="#contato"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('prefill-contact', { detail: { assunto: data.title } }));
              onClose();
            }}
            className="block w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-2xl text-center transition-all"
          >
            Solicitar Cotação
          </a>
        </div>
      </motion.div>
    </div>
  );
};
