import { motion } from 'framer-motion';
import { Users, Building2, Car } from 'lucide-react';
import { CountUp } from './CountUp';

export const About = () => {
  return (
    <section id="sobre" className="py-32 px-6 relative overflow-hidden" style={{ background: 'var(--surface)' }}>
       {/* Decorative lines */}
       <div className="absolute inset-0 opacity-[0.03] dark:opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-foreground" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-foreground" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-foreground" />
       </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative z-10 aspect-square glass rounded-[3rem] overflow-hidden border-white/20 group">
             <img
               src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
               alt="London Seguros - Sede própria"
               className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-brand-navy/50">
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="text-8xl font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  29+
                </motion.span>
                <span className="text-xl font-bold text-brand-blue uppercase tracking-[0.3em]">Anos de Excelência</span>
             </div>
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -right-6 glass px-8 py-6 rounded-2xl z-20 shadow-2xl"
          >
            <p className="text-text-primary font-bold text-lg leading-tight text-center">Fundada em <br /><span className="text-brand-blue">1989</span></p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-current/10 bg-foreground/5 text-text-secondary text-[10px] font-bold mb-6 tracking-widest uppercase">
            Quem Somos
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-text-primary tracking-tighter">TRADIÇÃO QUE <br />GERA CONFIANÇA.</h2>
          <p className="text-text-secondary text-base mb-4 leading-relaxed">
            A London Seguros é uma corretora de seguros que está há <span className="text-text-primary font-semibold">29 anos garantindo suas conquistas</span>. Fundada em 11 de setembro de 1989, atua em diversos ramos de seguros com uma carteira consolidada de clientes e bens segurados.
          </p>
          <p className="text-text-secondary text-base mb-8 leading-relaxed">
            O sócio fundador, <span className="text-text-primary font-semibold">Sr. Odécio Fornaciari</span>, tem ampla expertise no ramo de seguros, onde atua desde 1975 quando iniciou sua carreira na Bamerindus Cia de Seguros. Desde 2001 a London está instalada em <span className="text-text-primary font-semibold">sede própria na Av. Maringá, 2300 – Londrina – PR</span>, com infraestrutura completa e equipe qualificada.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-5 text-center group relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              <Users className="w-6 h-6 text-brand-blue mx-auto mb-2 relative z-10" />
              <p className="text-2xl font-black text-text-primary relative z-10"><CountUp value={9000} suffix="+" format /></p>
              <p className="text-text-muted text-xs mt-1 relative z-10">Clientes</p>
            </div>
            <div className="glass rounded-2xl p-5 text-center group relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              <Car className="w-6 h-6 text-brand-blue mx-auto mb-2 relative z-10" />
              <p className="text-2xl font-black text-text-primary relative z-10"><CountUp value={6000} suffix="+" format /></p>
              <p className="text-text-muted text-xs mt-1 relative z-10">Veículos Segurados</p>
            </div>
            <div className="glass rounded-2xl p-5 text-center group relative overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              <Building2 className="w-6 h-6 text-brand-blue mx-auto mb-2 relative z-10" />
              <p className="text-2xl font-black text-text-primary relative z-10"><CountUp value={2001} duration={1500} /></p>
              <p className="text-text-muted text-xs mt-1 relative z-10">Sede Própria</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
