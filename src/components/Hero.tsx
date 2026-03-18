import { motion } from 'framer-motion';
import { CountUp } from './CountUp';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100 -z-10" />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full -z-10"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full -z-10"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-5xl px-6 text-center z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/8 text-brand-blue text-xs font-semibold mb-8 tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
          Garantindo suas conquistas desde 1989
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.92] mb-6 text-text-primary"
        >
          PROTEÇÃO QUE<br />
          <span className="gradient-text">DURA GERAÇÕES.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A London Seguros combina <span className="text-text-primary font-medium">29 anos de tradição</span> e atendimento humanizado para proteger o que é mais importante para você e sua empresa.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col md:flex-row gap-3 justify-center"
        >
          <a
            href="#contato"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
          >
            Fazer Cotação
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-current/10 bg-foreground/[0.04] text-text-primary hover:bg-foreground/[0.08] transition-all duration-200"
          >
            Conheça nossos seguros
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center"
        >
          {[
            { target: 29, suffix: '+', label: 'Anos de mercado' },
            { target: 9000, suffix: '+', label: 'Clientes ativos', format: true },
            { target: 6000, suffix: '+', label: 'Veículos segurados', format: true },
          ].map(s => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
                <CountUp value={s.target} suffix={s.suffix} format={s.format} />
              </p>
              <p className="text-xs text-text-muted font-medium mt-1 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-16 w-full max-w-5xl aspect-[21/9] rounded-t-[2.5rem] overflow-hidden relative group border border-current/10 border-b-0"
      >
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80"
          alt="Proteção e segurança — London Seguros"
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};
