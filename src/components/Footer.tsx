import { Shield, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { MapModal } from './MapModal';
import { ClientAreaModal } from './ClientAreaModal';

export const Footer = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isClientAreaOpen, setIsClientAreaOpen] = useState(false);
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
          <div className="text-text-primary/50 text-xs space-y-1">
            <p>Corretor Responsável: <span className="text-text-primary/70">Odécio Fornaciari</span></p>
            <p>CNPJ: <span className="text-text-primary/70">80.927.171/0001-08</span></p>
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

    <footer className="py-16 px-6 border-t border-current/10 bg-[#1a1f2e]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Coluna 1 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/viver-de-pj-logo.png" alt="Viver de PJ" className="w-12 h-12 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base">Viver de PJ</span>
              <span className="text-white/50 text-xs">Ecosistema de Empreendedorismo</span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Sistema de Gestão Inteligente por Viver de PJ. A Viver de PJ é um ecosistema completo de gestão e educação para Empreeedendores.
          </p>
          <div className="text-white/60 text-sm space-y-1">
            <p>Autor: Fernando Carvalho Gomes dos Santos</p>
            <p>39063242816.</p>
          </div>
        </div>

        {/* Coluna 2 — Contato */}
        <div>
          <h4 className="font-bold text-white mb-6">Contato</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-center gap-3">
              <a href="https://wa.me/5511971039181?text=Oi%20Sofia%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20IMPGEO%20e%20fiquei%20interessado%20pelo%20trabalho%20da%20Viver%20de%20PJ%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.55 5.55l1.52-1.52a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 14.8z"/></svg>
                (11) 97103-9181
              </a>
            </li>
            <li className="flex items-center gap-3">
              <a href="mailto:vem@viverdepj.com.br" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                vem@viverdepj.com.br
              </a>
            </li>
            <li className="flex items-center gap-3">
              <a href="https://viverdepj.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                viverdepj.com.br
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7l9-4 9 4v13l-9 4-9-4z"/><path d="M12 3v18M3 7l9 4 9-4"/></svg>
              Brasil
            </li>
          </ul>
        </div>

        {/* Coluna 3 — Serviços */}
        <div>
          <h4 className="font-bold text-white mb-6">Serviços</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li>Consultoria Estratégica de Negócios</li>
            <li>Sistema de Gestão</li>
            <li>Sistema Financeiro</li>
            <li>CRM</li>
            <li>IA Financeira</li>
            <li>IA de Atendimento</li>
            <li>IA para Negócios</li>
            <li>Benefícios Corporativos</li>
            <li>Contabilidade para Empresas</li>
            <li>BPO Financeiro</li>
          </ul>
        </div>
      </div>

    </footer>
    </>
  );
};
