import { motion } from 'framer-motion';
import { Car, Heart, ShieldCheck, Home, Briefcase, Plane } from 'lucide-react';

const services = [
  {
    title: 'Seguro Auto',
    desc: 'Proteção completa para seu veículo com assistência 24h e coberturas flexíveis.',
    icon: Car,
    span: 'md:col-span-2',
    color: 'text-blue-400',
    bg: 'bg-blue-500/5'
  },
  {
    title: 'Vida',
    desc: 'Tranquilidade para você e sua família no futuro.',
    icon: Heart,
    span: 'md:col-span-1',
    color: 'text-rose-400',
    bg: 'bg-rose-500/5'
  },
  {
    title: 'Residencial',
    desc: 'Sua casa protegida contra incêndios, roubos e danos elétricos.',
    icon: Home,
    span: 'md:col-span-1',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/5'
  },
  {
    title: 'Empresarial',
    desc: 'Soluções personalizadas para proteger o patrimônio e os funcionários da sua empresa.',
    icon: Briefcase,
    span: 'md:col-span-2',
    color: 'text-amber-400',
    bg: 'bg-amber-500/5'
  },
  {
    title: 'Viagem',
    desc: 'Curta cada momento sem preocupações com assistência médica e seguro bagagem.',
    icon: Plane,
    span: 'md:col-span-1',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/5'
  },
  {
    title: 'Saúde',
    desc: 'Os melhores planos para cuidar do que é mais valioso.',
    icon: ShieldCheck,
    span: 'md:col-span-1',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/5'
  }
];

export const Services = () => {
  return (
    <section id="servicos" className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/10 blur-[150px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tighter"
          >
            NOSSOS SEGUROS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto"
          >
            Estruturas modulares de proteção desenhadas para as necessidades do mundo moderno.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bento-card group relative overflow-hidden ${service.span} ${service.bg}`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-text-primary">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-text-muted uppercase">Consultoria London</span>
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                    →
                  </button>
                </div>
              </div>
              
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
