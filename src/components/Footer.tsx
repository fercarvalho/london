import { Shield, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { MapModal } from './MapModal';

export const Footer = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const phoneNumber = '5543999943000';
  const whatsappMessage = encodeURIComponent('Olá! London Seguros, vim pelo site e gostaria de mais informações!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-brand-navy/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-brand-blue" />
            <span className="text-xl font-bold tracking-tight text-white">LONDON</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            London Seguradora - Especialistas em seguros e consultoria de benefícios.
            Proteção e segurança para você e seu patrimônio.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Contatos</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                (43) 99994-3000
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@londonseg.com.br"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-blue" />
                contato@londonseg.com.br
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsMapModalOpen(true)}
                className="flex items-center gap-3 hover:text-white transition-colors text-left"
              >
                <MapPin className="w-4 h-4 text-brand-blue" />
                Av. Maringá, 2300 | 86060-000 | Londrina-PR
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#servicos" className="hover:text-white">Nossos Seguros</a></li>
            <li><a href="#sobre" className="hover:text-white">Quem Somos</a></li>
            <li><a href="#" className="hover:text-white">Portal do Cliente</a></li>
            <li><a href="#" className="hover:text-white">Sinistros</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/londonseg/" className="glass p-3 rounded-full hover:bg-brand-blue hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/LONDONSEGUROSCORRETORA" className="glass p-3 rounded-full hover:bg-brand-blue hover:text-white transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
        <p>© 2026 London Seguradora. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-300">Privacidade</a>
          <a href="#" className="hover:text-slate-300">Termos de uso</a>
        </div>
      </div>

      <MapModal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} />
    </footer>
  );
};
