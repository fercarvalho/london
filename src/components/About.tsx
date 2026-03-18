import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

export const About = () => {
  return (
    <section id="sobre" className="py-32 px-6 bg-foreground/[0.03] relative overflow-hidden">
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
               src={heroBg} 
               alt="History" 
               className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-brand-navy/60">
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
            Sobre a London Seguradora
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-text-primary tracking-tighter">TRADIÇÃO QUE <br />PURA INOVAÇÃO.</h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Londom Seguradora nasceu com a missão de oferecer consultoria especializada. Nossa sede no Tatuapé, em São Paulo, é o centro de uma operação que prioriza a <span className="text-text-primary font-semibold">ética e o atendimento humanizado.</span>
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl glass border-brand-blue/30 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_10px_#3b82f6]" />
              </div>
              <div>
                <h4 className="text-text-primary font-bold text-lg mb-1">Especialistas Certificados</h4>
                <p className="text-text-muted text-sm">Nossa equipe é altamente treinada para encontrar o melhor custo-benefício para você.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl glass border-brand-blue/30 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_10px_#3b82f6]" />
              </div>
              <div>
                <h4 className="text-text-primary font-bold text-lg mb-1">Atendimento 24/7</h4>
                <p className="text-text-muted text-sm">Estamos ao seu lado em todos os momentos críticos, com suporte total em sinistros.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
