import { motion } from 'framer-motion';
import { Car, Heart, ShieldCheck, Home, Briefcase, Plane, LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import { AllInsurancesModal } from './AllInsurancesModal';
import { InsuranceModal, type InsuranceDetail } from './InsuranceModal';

const services: {
  title: string;
  desc: string;
  icon: React.ElementType;
  span: string;
  color: string;
  bg: string;
  detail: InsuranceDetail;
}[] = [
  {
    title: 'Seguro Auto',
    desc: 'Proteção completa para seu veículo com assistência 24h e coberturas flexíveis.',
    icon: Car,
    span: 'md:col-span-2',
    color: 'text-blue-400',
    bg: 'bg-blue-500/5',
    detail: {
      title: 'Seguro Auto',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      description:
        'O Seguro Auto protege seu veículo contra colisões, roubo, furto, incêndio e danos causados por fenômenos naturais. Além disso, inclui assistência 24h em casos de pane mecânica, reboque, troca de pneu e muito mais. Com coberturas flexíveis, você escolhe o plano ideal para o seu perfil e orçamento.',
      faq: [
        { question: 'O que é cobertura compreensiva?', answer: 'A cobertura compreensiva protege seu veículo contra colisão, roubo, furto, incêndio e danos causados pela natureza, como granizo e alagamentos.' },
        { question: 'O seguro cobre terceiros?', answer: 'Sim, a cobertura de responsabilidade civil cobre danos materiais e corporais causados a terceiros em um acidente onde você seja o responsável.' },
        { question: 'Preciso de vistoria prévia?', answer: 'Geralmente sim, especialmente para veículos usados. A vistoria garante que o veículo não possui danos pré-existentes não declarados.' },
        { question: 'O que é franquia?', answer: 'A franquia é o valor que o segurado paga em caso de sinistro. Quanto maior a franquia escolhida, menor tende a ser o valor do prêmio mensal.' },
        { question: 'Como acionar o seguro em caso de acidente?', answer: 'Basta ligar para a central 24h da seguradora, informar o número de apólice e descrever o ocorrido. Um assistente irá orientá-lo sobre os próximos passos.' },
      ],
    },
  },
  {
    title: 'Vida',
    desc: 'Tranquilidade para você e sua família no futuro.',
    icon: Heart,
    span: 'md:col-span-1',
    color: 'text-rose-400',
    bg: 'bg-rose-500/5',
    detail: {
      title: 'Seguro de Vida',
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80',
      description:
        'O Seguro de Vida garante proteção financeira para sua família em caso de falecimento, invalidez permanente ou doenças graves. É um investimento na tranquilidade de quem você ama, assegurando que eles terão suporte financeiro nos momentos mais difíceis.',
      faq: [
        { question: 'Quem pode ser beneficiário?', answer: 'Você pode indicar qualquer pessoa como beneficiária — cônjuge, filhos, pais ou amigos. Também é possível dividir o valor entre múltiplos beneficiários.' },
        { question: 'O que é invalidez permanente total?', answer: 'É a perda definitiva e irreversível da capacidade laboral do segurado, seja por acidente ou doença, que o impossibilita de exercer qualquer atividade remunerada.' },
        { question: 'Existe carência?', answer: 'Para morte natural, algumas apólices preveem carência de até 2 anos. Para morte acidental, geralmente não há carência.' },
        { question: 'O valor do seguro é tributado?', answer: 'Não. O capital pago ao beneficiário em caso de sinistro é isento de Imposto de Renda.' },
        { question: 'Posso contratar mesmo tendo doenças preexistentes?', answer: 'Depende da seguradora e da doença. Algumas aceitam com exclusão de cobertura para a condição preexistente, outras podem recusar ou cobrar um prêmio adicional.' },
      ],
    },
  },
  {
    title: 'Residencial',
    desc: 'Sua casa protegida contra incêndios, roubos e danos elétricos.',
    icon: Home,
    span: 'md:col-span-1',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/5',
    detail: {
      title: 'Seguro Residencial',
      image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80',
      description:
        'O Seguro Residencial protege seu imóvel e seus pertences contra incêndio, explosão, raio, roubo, danos elétricos, alagamentos e muito mais. Também oferece assistência 24h para serviços emergenciais como encanamento, elétrica e chaveiro.',
      faq: [
        { question: 'Cobre imóvel alugado?', answer: 'Sim. Tanto proprietários quanto inquilinos podem contratar o seguro residencial. O inquilino protege seus bens e o proprietário protege a estrutura do imóvel.' },
        { question: 'O que são danos elétricos?', answer: 'São danos causados a equipamentos eletroeletrônicos por variações de tensão, curto-circuito ou raio — cobertos pela maioria dos planos residenciais.' },
        { question: 'A cobertura inclui os itens dentro de casa?', answer: 'Sim, a cobertura de conteúdo protege seus móveis, eletrodomésticos, roupas e outros bens contra roubo, incêndio e outros sinistros.' },
        { question: 'O que é assistência 24h?', answer: 'É um serviço de emergência que envia profissionais (encanador, eletricista, chaveiro) ao seu imóvel quando necessário, sem custo adicional.' },
        { question: 'Cobre danos causados por chuva?', answer: 'Sim, desde que contratada a cobertura de vendaval e/ou alagamento. É importante verificar as coberturas contratadas na apólice.' },
      ],
    },
  },
  {
    title: 'Empresarial',
    desc: 'Soluções personalizadas para proteger o patrimônio e os funcionários da sua empresa.',
    icon: Briefcase,
    span: 'md:col-span-2',
    color: 'text-amber-400',
    bg: 'bg-amber-500/5',
    detail: {
      title: 'Seguro Empresarial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      description:
        'O Seguro Empresarial oferece proteção completa para o patrimônio da sua empresa — desde o imóvel e equipamentos até a responsabilidade civil. Ideal para empresas de todos os portes, garante a continuidade do negócio em situações adversas como incêndios, roubos e danos a terceiros.',
      faq: [
        { question: 'Quais empresas podem contratar?', answer: 'Empresas de qualquer porte e segmento — comércio, indústria, serviços, escritórios, clínicas e outros — podem contratar o seguro empresarial.' },
        { question: 'O que é responsabilidade civil empresarial?', answer: 'Cobre danos materiais e corporais involuntariamente causados a terceiros em decorrência das atividades da sua empresa.' },
        { question: 'Cobre equipamentos e máquinas?', answer: 'Sim. A cobertura de equipamentos eletrônicos e quebra de máquinas protege os ativos operacionais da empresa contra danos acidentais.' },
        { question: 'E os funcionários estão cobertos?', answer: 'O seguro empresarial pode incluir cobertura de acidentes pessoais para funcionários. Para coberturas mais amplas, recomenda-se contratar um seguro de vida em grupo.' },
        { question: 'O seguro cobre lucros cessantes?', answer: 'Sim, quando contratada a cobertura de lucros cessantes, a seguradora indeniza a perda de receita durante o período em que a empresa ficou impossibilitada de operar após um sinistro.' },
      ],
    },
  },
  {
    title: 'Viagem',
    desc: 'Curta cada momento sem preocupações com assistência médica e seguro bagagem.',
    icon: Plane,
    span: 'md:col-span-1',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/5',
    detail: {
      title: 'Seguro Viagem',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      description:
        'O Seguro Viagem é indispensável para viagens nacionais e internacionais. Cobre despesas médicas e hospitalares, extravio de bagagem, cancelamento de voo, assistência jurídica e muito mais. Viaje com tranquilidade sabendo que está protegido em qualquer lugar do mundo.',
      faq: [
        { question: 'É obrigatório para viajar ao exterior?', answer: 'Para alguns destinos como os países do Espaço Schengen (Europa), o seguro viagem é obrigatório. Para outros, é altamente recomendado devido aos altos custos médicos no exterior.' },
        { question: 'Cobre doenças preexistentes?', answer: 'Depende do plano. Alguns cobrem emergências relacionadas a doenças preexistentes com limitações. É fundamental declarar as condições de saúde no momento da contratação.' },
        { question: 'O que acontece se perder o voo?', answer: 'A cobertura de perda de conexão e cancelamento de voo indeniza as despesas extras com hospedagem e refeições, dependendo do motivo do cancelamento.' },
        { question: 'Cobre esportes radicais?', answer: 'Coberturas padrão geralmente não incluem esportes radicais. É necessário contratar uma cobertura adicional específica para essas atividades.' },
        { question: 'Como acionar o seguro no exterior?', answer: 'Através do número de emergência internacional da seguradora, disponível 24h. Guarde sempre o número e o número da apólice durante a viagem.' },
      ],
    },
  },
  {
    title: 'Saúde',
    desc: 'Os melhores planos para cuidar do que é mais valioso.',
    icon: ShieldCheck,
    span: 'md:col-span-1',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/5',
    detail: {
      title: 'Seguro Saúde',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      description:
        'O Seguro Saúde garante acesso a consultas, exames, internações e cirurgias com qualidade e agilidade. Oferecemos planos individuais, familiares e empresariais com ampla rede credenciada em Londrina e região, para que você e sua família tenham o melhor atendimento quando mais precisar.',
      faq: [
        { question: 'Qual a diferença entre plano de saúde e seguro saúde?', answer: 'O plano de saúde cobre serviços em rede própria ou credenciada. O seguro saúde reembolsa as despesas médicas realizadas em qualquer prestador, com mais flexibilidade de escolha.' },
        { question: 'Existe período de carência?', answer: 'Sim. Para consultas e exames simples, a carência costuma ser de 30 dias. Para internações eletivas, pode ser de até 180 dias. Urgências e emergências são cobertas imediatamente.' },
        { question: 'Posso incluir dependentes?', answer: 'Sim. Cônjuges, filhos e outros dependentes podem ser incluídos no plano, com cobrança proporcional ao número de vidas.' },
        { question: 'O que é coparticipação?', answer: 'É uma modalidade onde o beneficiário paga uma parte do custo de cada procedimento. Planos com coparticipação costumam ter mensalidades menores.' },
        { question: 'Posso usar em qualquer hospital?', answer: 'Depende do tipo de plano. O plano com reembolso permite uso em qualquer hospital. O plano em rede credenciada oferece cobertura apenas nos prestadores conveniados.' },
      ],
    },
  },
];

export const Services = () => {
  const [allOpen, setAllOpen] = useState(false);
  const [selected, setSelected] = useState<InsuranceDetail | null>(null);

  return (
    <section id="servicos" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border border-current/10 bg-foreground/[0.04] text-text-muted text-[11px] font-semibold mb-5 tracking-widest uppercase"
          >
            Portfólio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-text-primary"
          >
            NOSSOS <span className="gradient-text">SEGUROS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-base md:text-lg max-w-xl mx-auto"
          >
            Proteção sob medida para cada fase da sua vida e do seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bento-card group relative overflow-hidden cursor-pointer ${service.span}`}
              onClick={() => setSelected(service.detail)}
            >
              <div className={`absolute inset-0 ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[var(--radius-bento)]`} />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.bg}`}>
                    <service.icon className={`w-5 h-5 ${service.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-text-primary">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">{service.desc}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-widest text-text-muted uppercase">Saber mais</span>
                  <div className="w-7 h-7 rounded-full border border-current/10 flex items-center justify-center text-text-muted group-hover:bg-brand-blue group-hover:text-white group-hover:border-transparent transition-all text-sm">→</div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Card Outros */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: services.length * 0.05 }}
            className="bento-card group relative overflow-hidden md:col-span-1 cursor-pointer"
            onClick={() => setAllOpen(true)}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[var(--radius-bento)]"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))' }} />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <LayoutGrid className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-text-primary">Outros</h3>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  Condomínios, Transportes, Fiança Locatícia, Estagiários e muito mais.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-widest text-text-muted uppercase">Ver todos</span>
                <div className="w-7 h-7 rounded-full border border-current/10 flex items-center justify-center text-text-muted group-hover:bg-brand-blue group-hover:text-white group-hover:border-transparent transition-all text-sm">→</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AllInsurancesModal isOpen={allOpen} onClose={() => setAllOpen(false)} />
      <InsuranceModal data={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
