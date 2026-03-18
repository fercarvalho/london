import { useEffect, useRef, useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchItem {
  title: string;
  description: string;
  href: string;
  tag: string;
}

const index: SearchItem[] = [
  { title: 'Início', description: 'Página inicial da London Seguros', href: '#inicio', tag: 'Seção' },
  { title: 'Nossos Seguros', description: 'Veja todos os seguros oferecidos', href: '#servicos', tag: 'Seção' },
  { title: 'Quem Somos', description: '29 anos garantindo suas conquistas em Londrina', href: '#sobre', tag: 'Seção' },
  { title: 'Seguradoras Parceiras', description: 'Bradesco, Allianz, Porto Seguro, HDI e mais', href: '#seguradoras', tag: 'Seção' },
  { title: 'Depoimentos', description: 'O que nossos parceiros e clientes dizem', href: '#depoimentos', tag: 'Seção' },
  { title: 'Contato', description: 'Fale conosco ou solicite uma cotação', href: '#contato', tag: 'Seção' },
  { title: 'Seguro Auto', description: 'Proteção completa para seu veículo com assistência 24h', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro de Vida', description: 'Proteção financeira para você e sua família', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro Residencial', description: 'Sua casa protegida contra incêndios, roubos e danos', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro Empresarial', description: 'Proteção para o patrimônio da sua empresa', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro Viagem', description: 'Viaje com tranquilidade no Brasil e no exterior', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro Saúde', description: 'Planos de saúde individuais, familiares e empresariais', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro de Caminhões', description: 'Proteção para veículos pesados e frotas', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro de Condomínios', description: 'Obrigatório por lei — cobre áreas comuns', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro para Estagiários', description: 'Exigido pela Lei do Estágio 11.788/08', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro de Eventos', description: 'Proteção para feiras, shows, casamentos e mais', href: '#servicos', tag: 'Seguro' },
  { title: 'Fiança Locatícia', description: 'Substitui o fiador no contrato de aluguel', href: '#servicos', tag: 'Seguro' },
  { title: 'Risco de Engenharia', description: 'Cobertura para obras e instalações industriais', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro Odontológico', description: 'Consultas, tratamentos e procedimentos dentários', href: '#servicos', tag: 'Seguro' },
  { title: 'Seguro de Transportes', description: 'Proteção de mercadorias em todos os modais', href: '#servicos', tag: 'Seguro' },
  { title: 'WhatsApp', description: '(43) 99994-3000 — Fale conosco agora', href: 'https://wa.me/5543999943000', tag: 'Contato' },
  { title: 'E-mail', description: 'contato@londonseg.com.br', href: 'mailto:contato@londonseg.com.br', tag: 'Contato' },
  { title: 'Endereço', description: 'Av. Maringá, 2300 — Londrina, PR', href: '#contato', tag: 'Contato' },
  { title: 'Solicitar Cotação', description: 'Preencha o formulário e receba sua cotação', href: '#contato', tag: 'Ação' },
];

const tagColors: Record<string, string> = {
  'Seção': 'bg-brand-blue/10 text-brand-blue',
  'Seguro': 'bg-emerald-500/10 text-emerald-500',
  'Contato': 'bg-amber-500/10 text-amber-500',
  'Ação': 'bg-rose-500/10 text-rose-500',
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: Props) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [onClose]);

  const results = query.trim().length === 0
    ? index.filter(i => i.tag === 'Seção')
    : index.filter(i =>
        i.title.toLowerCase().includes(query.toLowerCase()) ||
        i.description.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (item: SearchItem) => {
    onClose();
    if (item.href.startsWith('http') || item.href.startsWith('mailto')) {
      window.open(item.href, '_blank');
    } else {
      setTimeout(() => {
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4"
          >
            <div className="bg-background border border-current/10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-current/10">
                <Search className="w-5 h-5 text-text-muted shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Pesquisar seguros, seções, contato..."
                  className="flex-1 bg-transparent outline-none text-text-primary placeholder:text-text-muted text-base"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="text-text-muted hover:text-text-primary transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto">
                {results.length === 0 ? (
                  <p className="text-text-muted text-sm text-center py-8">Nenhum resultado para "{query}"</p>
                ) : (
                  <ul>
                    {results.map(item => (
                      <li key={item.title}>
                        <button
                          onClick={() => handleSelect(item)}
                          className="w-full flex items-center gap-4 px-5 py-3 hover:bg-foreground/5 transition-colors text-left group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-text-primary font-semibold text-sm">{item.title}</span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[item.tag]}`}>
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-text-muted text-xs truncate">{item.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-brand-blue transition-colors shrink-0" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="px-5 py-2 border-t border-current/10 flex items-center gap-4 text-[10px] text-text-muted">
                <span><kbd className="glass px-1.5 py-0.5 rounded text-[10px]">↵</kbd> selecionar</span>
                <span><kbd className="glass px-1.5 py-0.5 rounded text-[10px]">ESC</kbd> fechar</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
