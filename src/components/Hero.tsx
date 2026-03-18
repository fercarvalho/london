import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center pt-36 overflow-hidden">
      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl px-6 text-center z-10 -mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block px-4 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-bold mb-10 tracking-widest uppercase"
        >
          Desde 1989 protegendo o Brasil
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-text-primary"
        >
          PROTEÇÃO QUE <br />
          <span className="text-brand-blue drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">DURA GERAÇÕES.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          A London Seguradora combina tradição e tecnologia para garantir o que é mais importante para você e sua empresa.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg text-center"
          >
            Fazer Cotação
          </a>
          <a
            href="#servicos"
            className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors border-current/10 text-text-primary text-center"
          >
            Conheça nossos seguros
          </a>
        </motion.div>
      </div>
      
      {/* Visual representative of 3d/Interactive element */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-20 w-full max-w-5xl aspect-[21/9] glass rounded-t-[3rem] border-b-0 relative group"
      >
        <div className="absolute inset-0 overflow-hidden rounded-t-[3rem]">
          <img
            src={heroBg}
            alt="Abstract Protection"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
           <div className="px-6 py-2 glass rounded-full text-sm font-medium border-white/10">
             London Experience
           </div>
        </div>
      </motion.div>
    </section>
  );
};
