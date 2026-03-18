import { motion } from 'framer-motion';

interface Insurer {
  name: string;
  abbr: string;
  sub?: string;
  bg: string;
  textColor: string;
  abbrevColor?: string;
}

const insurers: Insurer[] = [
  { name: 'Bradesco Seguros', abbr: 'B', sub: 'Bradesco\nSeguros', bg: '#CC0000', textColor: '#fff' },
  { name: 'Itaú', abbr: 'itaú', sub: 'Seguros', bg: '#003B7A', textColor: '#F5A623' },
  { name: 'Porto Seguro', abbr: 'PS', sub: 'Porto Seguro', bg: '#005CA0', textColor: '#fff' },
  { name: 'Allianz', abbr: 'AZ', sub: 'Allianz', bg: '#003781', textColor: '#fff' },
  { name: 'Zurich Seguros', abbr: 'Z', sub: 'Zurich\nSeguros', bg: 'transparent', textColor: '#1A1A6C', abbrevColor: '#1A1A6C' },
  { name: 'SulAmérica', abbr: 'SA', sub: 'SulAmérica', bg: '#003087', textColor: '#fff' },
  { name: 'Azul Seguros', abbr: 'Azul', sub: 'Seguros', bg: '#0066CC', textColor: '#fff' },
  { name: 'HDI Seguros', abbr: 'HDI', sub: 'Seguros', bg: '#1D7D2E', textColor: '#fff' },
];

export const Partners = () => {
  return (
    <section id="seguradoras" className="py-32 px-6 relative overflow-hidden" style={{ background: 'var(--surface)' }}>
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-foreground" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-foreground" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border border-current/10 bg-foreground/5 text-text-secondary text-[10px] font-bold mb-6 tracking-widest uppercase"
          >
            Nossas Parceiras
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-text-primary"
          >
            SEGURADORAS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Para melhor atender a você, sua empresa e sua família, a London Seguros firmou parceria com as melhores seguradoras do mercado — seguradoras de credibilidade que oferecem os melhores produtos no ramo de seguro!
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {insurers.map((insurer, index) => (
            <motion.div
              key={insurer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass rounded-2xl p-6 flex items-center justify-center aspect-video transition-all duration-300 relative overflow-hidden group hover:scale-105"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ backgroundColor: insurer.bg === 'transparent' ? 'rgba(59,130,246,0.06)' : `${insurer.bg}18` }}
              />
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: insurer.bg === 'transparent' ? 'transparent' : insurer.bg,
                    border: insurer.bg === 'transparent' ? `2px solid ${insurer.abbrevColor}` : 'none',
                  }}
                >
                  <span
                    className="font-black text-sm leading-none"
                    style={{ color: insurer.abbrevColor ?? insurer.textColor }}
                  >
                    {insurer.abbr}
                  </span>
                </div>
                <span className="text-text-primary font-bold text-xs text-center leading-tight whitespace-pre-line">
                  {insurer.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
