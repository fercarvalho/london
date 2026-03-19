import { Shield, Mail, Phone, MapPin, Instagram, Facebook, Globe, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapModal } from './MapModal';
import { ClientAreaModal } from './ClientAreaModal';

function ViverDePJModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <motion.div
          className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-[#1a1f2e] border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src="/viver-de-pj-logo.png" alt="Viver de PJ" className="h-8 object-contain" />
              <div>
                <p className="text-sm font-semibold text-white">Viver de PJ</p>
                <p className="text-xs text-white/40">Ecossistema de Empreendedorismo</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
            >
              <X size={15} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-6">
            {/* Contato */}
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/50">
                  <Phone size={14} className="text-white/30 shrink-0" />
                  <a
                    href="https://wa.me/5511971039181?text=Oi%20Sofia%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20London%20e%20fiquei%20interessado%20pelo%20trabalho%20da%20Viver%20de%20PJ%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    (11) 97103-9181
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/50">
                  <Mail size={14} className="text-white/30 shrink-0" />
                  <a href="mailto:vem@viverdepj.com.br" className="hover:text-white transition-colors">
                    vem@viverdepj.com.br
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/50">
                  <Globe size={14} className="text-white/30 shrink-0" />
                  <a href="https://viverdepj.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    viverdepj.com.br
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/50">
                  <MapPin size={14} className="text-white/30 shrink-0" />
                  <span>Brasil</span>
                </li>
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Serviços</h3>
              <ul className="space-y-2">
                {[
                  'Consultoria Estratégica de Negócios',
                  'Sistema de Gestão',
                  'Sistema Financeiro',
                  'CRM',
                  'IA Financeira',
                  'IA de Atendimento',
                  'IA para Negócios',
                  'Benefícios Corporativos',
                  'Contabilidade para Empresas',
                  'BPO Financeiro',
                ].map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-white/50">
                    <span className="w-1 h-1 rounded-full bg-brand-blue shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export const Footer = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isClientAreaOpen, setIsClientAreaOpen] = useState(false);
  const [isViverOpen, setIsViverOpen] = useState(false);
  const phoneNumber = '5543999943000';
  const whatsappMessage = encodeURIComponent('Olá! London Seguros, vim pelo site e gostaria de mais informações!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <>
      <footer className="py-20 px-6 border-t border-current/10" style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-brand-blue" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-text-primary">LONDON</span>
                <span className="text-[9px] font-semibold text-text-muted tracking-widest uppercase">Garantindo suas conquistas</span>
              </div>
            </div>
            <p className="text-text-primary/70 text-sm leading-relaxed mb-4">
              London Seguradora - Especialistas em seguros e consultoria de benefícios.
              Proteção e segurança para você e seu patrimônio.
            </p>
            <div className="text-text-primary/50 text-xs space-y-1 mb-6">
              <p>Corretor Responsável: <span className="text-text-primary/70">Odécio Fornaciari</span></p>
              <p>CNPJ: <span className="text-text-primary/70">80.927.171/0001-08</span></p>
            </div>

            {/* Viver de PJ block */}
            <div className="pt-5 border-t border-current/10">
              <div className="flex items-center gap-2.5 mb-2">
                <img src="/viver-de-pj-logo.png" alt="Viver de PJ" className="h-7 object-contain" />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-text-primary">Viver de PJ</span>
                  <span className="text-[10px] text-text-muted">Ecossistema de Empreendedorismo</span>
                </div>
              </div>
              <p className="text-xs text-text-primary/40 leading-relaxed mb-1">
                A Viver de PJ é um ecossistema completo de gestão e educação para Empreendedores.
              </p>
              <p className="text-xs text-text-primary/30 mb-3">
                Autor: Fernando Carvalho Gomes dos Santos — 39063242816
              </p>
              <button
                onClick={() => setIsViverOpen(true)}
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-blue hover:text-brand-blue/80 transition-colors duration-200"
              >
                Para mais informações sobre a Viver de PJ clique aqui <ArrowRight size={11} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-6">Contatos</h4>
            <ul className="space-y-4 text-text-primary/70 text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-brand-blue transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  (43) 99994-3000
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@londonseg.com.br"
                  className="flex items-center gap-3 hover:text-brand-blue transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-blue" />
                  contato@londonseg.com.br
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsMapModalOpen(true)}
                  className="flex items-center gap-3 hover:text-brand-blue transition-colors text-left"
                >
                  <MapPin className="w-4 h-4 text-brand-blue" />
                  Av. Maringá, 2300 | 86060-000 | Londrina-PR
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-text-primary/70 text-sm">
              <li><a href="#servicos" className="hover:text-brand-blue transition-colors">Nossos Seguros</a></li>
              <li><a href="#sobre" className="hover:text-brand-blue transition-colors">Quem Somos</a></li>
              <li><button onClick={() => setIsClientAreaOpen(true)} className="hover:text-brand-blue transition-colors">Portal do Cliente</button></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Sinistros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/londonseg/" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:bg-brand-blue hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/LONDONSEGUROSCORRETORA" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:bg-brand-blue hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-current/10 space-y-6">
          <p className="text-text-primary/60 text-sm leading-relaxed">
            A London Seguros é uma corretora de seguros que está há 29 anos garantindo suas conquistas em Londrina e região. Fundada em 11 de setembro de 1989, a London Seguros atua em diversos ramos de seguros, como Carros / Automóveis, Condomínios, Empresas, Estagiários, Caminhões / Frotas, Eventos, Fiança Locatícia, Residências, Vida/Acidentes Pessoais, Risco de Engenharia, Saúde, Odontológico, Transportes e Viagens com uma carteira consolidada de clientes e bens segurados, contando com mais de 9.000 clientes e 6.000 veículos segurados oferecendo um atendimento de qualidade e de credibilidade.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-text-primary/50 text-xs border-t border-current/10 pt-6">
            <p>© 2026 LONDON CORRETORA DE SEGUROS | CNPJ: 80.927.171/0001-08 | Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-text-secondary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-text-secondary transition-colors">Termos de uso</a>
            </div>
          </div>
        </div>

        <MapModal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} />
        <ClientAreaModal isOpen={isClientAreaOpen} onClose={() => setIsClientAreaOpen(false)} />
      </footer>

      {isViverOpen && <ViverDePJModal onClose={() => setIsViverOpen(false)} />}
    </>
  );
};
