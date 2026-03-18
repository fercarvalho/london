import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'London Corretora de Seguros empresa e profissionais conceituados no mercado com mais de 20 anos de experiência.',
    author: 'Jaime Serpeloni Junior',
    role: 'Gerente Comercial — Mobile Londrina',
    company: 'Mobile Londrina',
    initials: 'JS',
    color: 'bg-blue-500',
  },
  {
    quote: 'A Metalrevest e seus diretores agradecem a London Seguros pela eficiência e prestatividade a nossa demanda de seguros, sempre com Qualidade, Agilidade e Confiança nesses 15 anos de parceria.',
    author: 'Aparecido Wilson Zachi & Ivan Carlos Zachi',
    role: 'Diretores',
    company: 'Metalrevest',
    initials: 'MR',
    color: 'bg-red-600',
  },
  {
    quote: 'Trabalhamos com a London Corretora a vários anos, e particularmente tenho contato direto com os profissionais da corretora, os quais são de extrema confiança e profissionalismo. A empresa é sólida e reconhecida no mercado segurador de Londrina e região, onde confiamos a ela a parceria na distribuição de nossos produtos de seguros aos clientes.',
    author: 'Fábio Grecco Mota',
    role: 'Gerente — Sucursal Londrina',
    company: 'MAPFRE Seguros',
    initials: 'MF',
    color: 'bg-red-700',
  },
  {
    quote: 'A história de parceria entre a London Corretora e a Tokio Marine Seguradora se dá a mais de 20 anos. Tenho muito orgulho de ver o quanto a London Corretora cresceu e prosperou, tendo se tornado referência em Corretora de Seguros em nossa cidade. Fruto de um trabalho árduo, agindo sempre com ética e com profissionais capacitados e dedicados, preocupados em atender seus clientes oferecendo as melhores soluções em produtos e serviços.',
    author: 'Viviane Magalhães',
    role: 'Gerente Executiva — Sucursal Londrina',
    company: 'Tokio Marine Seguradora',
    initials: 'TM',
    color: 'bg-teal-600',
  },
  {
    quote: 'Parceria London e Allianz, sinônimo de Comprometimento, Segurança e Respeito construídos de A à Z. Nossos agradecimentos à confiança e credibilidade!!!',
    author: 'Fabricio Oliveira',
    role: 'Gerente Filial Londrina',
    company: 'Allianz',
    initials: 'AZ',
    color: 'bg-[#003781]',
  },
  {
    quote: 'Liberty Seguros e London Corretora, uma parceria de 18 anos que vem garantindo aos clientes a possibilidade de aproveitarem o hoje com a confiança no amanhã.',
    author: 'Mauricio de Camargo',
    role: 'Filial Londrina',
    company: 'Liberty Seguros',
    initials: 'LB',
    color: 'bg-blue-700',
  },
  {
    quote: 'A London Seguros tem uma história de 30 anos no mercado. Nós, da Porto Seguro, temos orgulho de fazer parte dessa história e de acompanhar essa trajetória de sucesso. São parceiros como a London Seguros que fazem a Porto Seguro estar entre as principais seguradoras do Brasil.',
    author: 'Antonio Ocimar Volante',
    role: 'Gerente Regional Londrina',
    company: 'Porto Seguro',
    initials: 'PS',
    color: 'bg-[#005CA0]',
  },
  {
    quote: 'O time da HDI Seguros se orgulha da parceria construída com a London Seguros ao longo de quase 20 anos de operações em conjunto com a nossa filial de Londrina, sempre com muita confiança e dedicação. Em um mercado desafiador, é fundamental a escolha de profissionais determinados a transformar desafios em oportunidades. É um privilégio fazer parte da história de sucesso da empresa.',
    author: 'HDI Seguros S.A.',
    role: 'Filial Londrina',
    company: 'HDI Seguros',
    initials: 'HDI',
    color: 'bg-[#1D7D2E]',
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="depoimentos" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-blue/10 blur-[150px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border border-current/10 bg-foreground/5 text-text-secondary text-[10px] font-bold mb-6 tracking-widest uppercase"
          >
            Depoimentos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-text-primary"
          >
            O QUE DIZEM SOBRE NÓS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-base md:text-lg max-w-xl mx-auto"
          >
            Veja o que nossos parceiros e clientes estão dizendo.
          </motion.p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35 }}
              className="glass rounded-3xl p-10 md:p-14 text-center"
            >
              <Quote className="w-10 h-10 text-brand-blue/40 mx-auto mb-6" />
              <p className="text-text-primary text-lg md:text-xl leading-relaxed font-medium mb-10">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-white font-black text-xs">{t.initials}</span>
                </div>
                <div className="text-left">
                  <p className="text-text-primary font-bold text-sm">{t.author}</p>
                  <p className="text-text-muted text-xs">{t.role}</p>
                  <p className="text-brand-blue text-xs font-semibold">{t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 glass rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-brand-blue' : 'w-2 bg-foreground/20'}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-11 h-11 glass rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
