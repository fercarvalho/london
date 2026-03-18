import { motion } from 'framer-motion';
import { Send, MessageSquare, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { MapModal } from './MapModal';

export const Contact = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const titleToOption: Record<string, string> = {
    'Seguro Auto': 'Seguro Automotivo',
    'Seguro de Vida': 'Seguro de Vida',
    'Seguro Residencial': 'Seguro Residencial',
    'Seguro Empresarial': 'Seguro Empresarial',
    'Seguro Viagem': 'Seguro Viagem',
    'Seguro Saúde': 'Seguro Saúde',
  };

  useEffect(() => {
    const handle = (e: Event) => {
      const { assunto } = (e as CustomEvent).detail;
      const option = titleToOption[assunto] ?? assunto;
      setFormData(prev => ({ ...prev, assunto: option, mensagem: 'Gostaria de realizar uma cotação' }));
    };
    window.addEventListener('prefill-contact', handle);
    return () => window.removeEventListener('prefill-contact', handle);
  }, []);

  const phoneNumber = '5543999943000';
  const whatsappMessage = encodeURIComponent('Olá! London Seguros, vim pelo site e gostaria de mais informações!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Montar a mensagem personalizada
    const mensagemWhatsApp = `Olá, me chamo ${formData.nome}, e gostaria de falar sobre ${formData.mensagem} sobre o assunto de ${formData.assunto}. Caso for melhor pode me responder por email ${formData.email}`;

    const mensagemEncoded = encodeURIComponent(mensagemWhatsApp);
    const whatsappUrlPersonalizado = `https://wa.me/${phoneNumber}?text=${mensagemEncoded}`;

    // Abrir WhatsApp em nova aba
    window.open(whatsappUrlPersonalizado, '_blank');
  };

  return (
    <section id="contato" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact Info Bento */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bento-card bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 dark:from-brand-navy/40 dark:to-brand-navy/20 border-brand-blue/20 dark:border-brand-navy/30 flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-text-primary mb-6">VAMOS <br /><span className="text-brand-blue">CONVERSAR?</span></h2>
            <p className="text-text-secondary mb-10">Solicite uma cotação personalizada ou tire suas dúvidas com nossos especialistas.</p>
            
            <div className="space-y-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-all">
                  <Phone className="w-5 h-5 text-brand-blue group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Ligue para nós</p>
                  <p className="text-text-primary font-bold">(43) 99994-3000</p>
                </div>
              </a>
              <a
                href="mailto:contato@londonseg.com.br"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-all">
                  <Mail className="w-5 h-5 text-brand-blue group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest">E-mail</p>
                  <p className="text-text-primary font-bold">contato@londonseg.com.br</p>
                </div>
              </a>
              <button
                onClick={() => setIsMapModalOpen(true)}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-all">
                  <MapPin className="w-5 h-5 text-brand-blue group-hover:text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Visite-nos</p>
                  <p className="text-text-primary font-bold text-sm">Av. Maringá, 2300 | 86060-000 | Londrina-PR</p>
                </div>
              </button>

              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-all">
                  <Clock className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Horário de Atendimento</p>
                  <p className="text-text-primary font-bold text-sm">Seg. a Sex.: 8h–12h e 13:30–18h</p>
                  <p className="text-text-secondary text-sm">Plantão Sáb.: 9h–12h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-current/10 relative z-10">
             <a
               href={whatsappUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="whatsapp-btn w-full border-2 border-emerald-500/40 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:shadow-lg"
             >
                <MessageSquare className="w-5 h-5" />
                Falar pelo WhatsApp
             </a>
          </div>
        </motion.div>

        {/* Contact Form Bento */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 bento-card group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-4">Nome completo</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Nome"
                  required
                  className="w-full bg-foreground/5 border border-current/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all placeholder:text-text-muted text-text-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-4">E-mail corporativo</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@empresa.com"
                  required
                  className="w-full bg-foreground/5 border border-current/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all placeholder:text-text-muted text-text-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-4">Interesse</label>
              <select
                name="assunto"
                value={formData.assunto}
                onChange={handleInputChange}
                required
                className="w-full bg-foreground/5 border border-current/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none cursor-pointer text-text-primary"
              >
                <option value="" className="bg-background">Selecione o tipo de seguro</option>
                <option value="Seguro de Vida" className="bg-background">Seguro de Vida</option>
                <option value="Seguro Automotivo" className="bg-background">Seguro Automotivo</option>
                <option value="Seguro Saúde" className="bg-background">Seguro Saúde</option>
                <option value="Seguro Empresarial" className="bg-background">Seguro Empresarial</option>
                <option value="Seguro Viagem" className="bg-background">Seguro Viagem</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-4">Sua Mensagem</label>
              <textarea
                rows={4}
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                placeholder="Como podemos ajudar você hoje?"
                required
                className="w-full bg-foreground/5 border border-current/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all placeholder:text-text-muted text-text-primary"
              />
            </div>

            <button type="submit" className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all group shadow-[0_10px_20px_rgba(59,130,246,0.2)]">
              Enviar via WhatsApp
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

      <MapModal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} />
    </section>
  );
};
