import { useEffect, useState } from 'react';
import { X, ShieldCheck, ChevronRight } from 'lucide-react';
import { InsuranceModal, type InsuranceDetail } from './InsuranceModal';

const insurances: InsuranceDetail[] = [
  {
    title: 'Seguro de Caminhões',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
    description:
      'O Seguro de Caminhões protege sua frota e seus veículos de carga contra colisão, roubo, furto, incêndio e danos a terceiros. Ideal para transportadoras, autônomos e empresas que dependem de veículos pesados para operar. Oferece coberturas específicas para o segmento, como cobertura de carga e assistência 24h em rodovias.',
    faq: [
      { question: 'Cobre a carga transportada?', answer: 'A cobertura da carga pode ser contratada separadamente como Seguro de Transportes. O seguro do caminhão cobre o veículo em si.' },
      { question: 'Vale para frotas inteiras?', answer: 'Sim. Seguros de frota oferecem condições diferenciadas e gestão centralizada para empresas com múltiplos veículos.' },
      { question: 'Cobre em todo o Brasil?', answer: 'Sim, a cobertura é nacional. Para rotas internacionais, é necessário verificar a extensão territorial da apólice.' },
      { question: 'E se o motorista não for o proprietário?', answer: 'A apólice cobre o veículo independentemente de quem esteja na direção, desde que o condutor esteja autorizado pelo segurado.' },
      { question: 'Há cobertura para implementos?', answer: 'Sim. Carretas, reboques e implementos rodoviários podem ser incluídos na apólice com coberturas específicas.' },
    ],
  },
  {
    title: 'Seguro de Condomínios',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    description:
      'O Seguro de Condomínios é obrigatório por lei (Lei 4.591/64) e protege as áreas comuns do prédio contra incêndio, explosão, raio e outros riscos. Cobre desde o prédio e suas instalações até a responsabilidade civil do condomínio por danos causados a terceiros.',
    faq: [
      { question: 'É obrigatório por lei?', answer: 'Sim. A Lei 4.591/64 torna obrigatória a contratação do seguro de incêndio para condomínios, cobrindo as áreas comuns.' },
      { question: 'Cobre apartamentos individuais?', answer: 'O seguro do condomínio cobre apenas as áreas comuns. Cada condômino deve contratar seu próprio seguro residencial para o apartamento.' },
      { question: 'O que é responsabilidade civil do condomínio?', answer: 'Cobre danos causados a terceiros em decorrência de falhas nas áreas comuns, como um objeto caindo da fachada ou acidente na garagem.' },
      { question: 'Quem contrata o seguro?', answer: 'O síndico ou administradora é responsável pela contratação em nome do condomínio, com aprovação em assembleia.' },
      { question: 'Cobre danos elétricos nas áreas comuns?', answer: 'Sim, quando contratada a cobertura de danos elétricos, equipamentos das áreas comuns como elevadores e bombas estão protegidos.' },
    ],
  },
  {
    title: 'Seguro para Estagiários',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    description:
      'O Seguro para Estagiários é exigido pela Lei do Estágio (Lei 11.788/08) e cobre o estagiário contra acidentes pessoais durante o período de estágio. É obrigação da empresa contratante garantir essa proteção ao estagiário durante o exercício de suas atividades.',
    faq: [
      { question: 'É obrigatório por lei?', answer: 'Sim. A Lei 11.788/08 exige que a empresa contratante forneça seguro contra acidentes pessoais ao estagiário durante a vigência do contrato de estágio.' },
      { question: 'O que cobre?', answer: 'Cobre morte acidental, invalidez permanente por acidente e despesas médicas e hospitalares decorrentes de acidentes ocorridos durante o estágio.' },
      { question: 'Quem paga o seguro?', answer: 'A empresa contratante do estagiário é responsável pelo pagamento do seguro.' },
      { question: 'Vale durante o trajeto casa-empresa?', answer: 'Sim. A cobertura se estende ao trajeto entre a residência e o local de estágio (acidente de trajeto).' },
      { question: 'O seguro substitui a carteira de trabalho?', answer: 'Não. O seguro é um benefício complementar obrigatório e não substitui as obrigações trabalhistas do contrato de estágio.' },
    ],
  },
  {
    title: 'Seguro de Eventos',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description:
      'O Seguro de Eventos protege organizadores, patrocinadores e participantes contra imprevistos que possam comprometer a realização de um evento. Cobre cancelamentos, responsabilidade civil, danos ao local, acidentes com participantes e prejuízos financeiros decorrentes de situações imprevistas.',
    faq: [
      { question: 'Que tipos de eventos podem ser segurados?', answer: 'Feiras, congressos, shows, casamentos, formaturas, eventos corporativos, esportivos e qualquer outro tipo de evento pode ser segurado.' },
      { question: 'O que cobre o cancelamento?', answer: 'Cobre os prejuízos financeiros em caso de cancelamento ou adiamento por motivos cobertos, como catástrofes naturais, falecimento do artista principal ou interdição do local.' },
      { question: 'E se um participante se machucar?', answer: 'A cobertura de acidentes pessoais para participantes indeniza em caso de morte ou invalidez decorrente de acidente durante o evento.' },
      { question: 'Cobre danos ao local do evento?', answer: 'Sim. A cobertura de responsabilidade civil cobre danos materiais causados ao espaço locado durante a realização do evento.' },
      { question: 'Quando devo contratar?', answer: 'O quanto antes, preferencialmente no momento do planejamento do evento, para garantir cobertura máxima desde o início das despesas.' },
    ],
  },
  {
    title: 'Fiança Locatícia',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    description:
      'A Fiança Locatícia é uma modalidade de garantia locatícia que substitui o fiador tradicional. Oferece segurança tanto para o locador quanto para o locatário, cobrindo inadimplência de aluguel, danos ao imóvel e multas contratuais. É prática, rápida de contratar e elimina a burocracia de encontrar um fiador.',
    faq: [
      { question: 'O que é fiança locatícia?', answer: 'É um seguro que garante ao proprietário o recebimento dos aluguéis em caso de inadimplência do inquilino, funcionando como substituto do fiador.' },
      { question: 'Quem paga o seguro?', answer: 'Normalmente o inquilino (locatário) paga o prêmio, mas isso pode ser negociado entre as partes.' },
      { question: 'Qual o valor do prêmio?', answer: 'Geralmente equivale a um a dois meses de aluguel por ano, distribuído em parcelas mensais.' },
      { question: 'Cobre danos ao imóvel?', answer: 'Sim. Além da inadimplência, a fiança locatícia pode cobrir danos ao imóvel causados pelo locatário ao final do contrato.' },
      { question: 'Como o proprietário aciona o seguro?', answer: 'Em caso de inadimplência, o proprietário aciona a seguradora que paga os valores devidos e passa a cobrar o inquilino diretamente.' },
    ],
  },
  {
    title: 'Risco de Engenharia',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    description:
      'O Seguro de Risco de Engenharia protege obras, instalações e equipamentos durante a fase de construção ou montagem. Cobre danos materiais à obra, responsabilidade civil do construtor e danos a terceiros. É essencial para construtoras, incorporadoras e empresas que realizam obras e instalações industriais.',
    faq: [
      { question: 'Quem deve contratar?', answer: 'Construtoras, incorporadoras, empreiteiras e qualquer empresa que execute obras de construção civil, montagem ou instalação de equipamentos.' },
      { question: 'O que são obras de construção civil?', answer: 'Construção de edifícios, pontes, estradas, instalações industriais, reformas estruturais e outros empreendimentos de engenharia.' },
      { question: 'Cobre erros de projeto?', answer: 'Geralmente não. O seguro cobre danos físicos à obra por causas acidentais. Erros de projeto costumam ser excluídos, mas há coberturas complementares disponíveis.' },
      { question: 'E os operários em caso de acidente?', answer: 'O seguro de risco de engenharia cobre responsabilidade civil por danos a terceiros, incluindo operários acidentados no canteiro de obras.' },
      { question: 'A apólice tem prazo?', answer: 'Sim, a vigência da apólice coincide com o prazo da obra, podendo ser prorrogada em caso de extensão do contrato de construção.' },
    ],
  },
  {
    title: 'Seguro Odontológico',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
    description:
      'O Seguro Odontológico garante acesso a tratamentos dentários com qualidade e custo acessível. Cobre consultas, limpezas, extrações, tratamentos de canal, próteses e procedimentos estéticos, dependendo do plano contratado. Disponível para pessoas físicas, famílias e empresas.',
    faq: [
      { question: 'Qual a diferença entre plano e seguro odontológico?', answer: 'O plano odontológico cobre tratamentos em rede credenciada. O seguro odontológico reembolsa procedimentos realizados em qualquer dentista.' },
      { question: 'Existe carência?', answer: 'Sim. Procedimentos simples como consultas e limpeza costumam ter carência de 30 dias. Próteses e implantes podem ter carência de até 180 dias.' },
      { question: 'Cobre implantes?', answer: 'Depende do plano. Planos mais completos cobrem implantes dentários. Verifique as coberturas no momento da contratação.' },
      { question: 'Posso incluir minha família?', answer: 'Sim. Planos familiares permitem incluir cônjuge e filhos, geralmente com desconto por número de beneficiários.' },
      { question: 'O plano odontológico é dedutível no IR?', answer: 'Sim. Despesas com planos odontológicos podem ser deduzidas na declaração de Imposto de Renda da Pessoa Física.' },
    ],
  },
  {
    title: 'Seguro de Transportes',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    description:
      'O Seguro de Transportes protege as mercadorias durante o transporte rodoviário, aéreo, marítimo ou ferroviário. Cobre avarias, roubos e danos às cargas desde a origem até o destino. É fundamental para importadores, exportadores e empresas que movimentam mercadorias regularmente.',
    faq: [
      { question: 'Cobre todos os modais de transporte?', answer: 'Sim. Rodoviário, aéreo, marítimo e ferroviário podem ser cobertos, dependendo da apólice contratada.' },
      { question: 'Quem deve contratar?', answer: 'O dono da mercadoria (embarcador) é o mais indicado para contratar, pois é quem tem interesse direto na proteção da carga.' },
      { question: 'O que é uma apólice aberta?', answer: 'É uma apólice que cobre automaticamente todas as cargas transportadas dentro de um período, ideal para empresas com alto volume de embarques.' },
      { question: 'Cobre roubo de carga?', answer: 'Sim. O roubo é uma das principais coberturas do seguro de transportes, especialmente importante para cargas de alto valor.' },
      { question: 'Como é calculado o valor segurado?', answer: 'Geralmente com base no valor da nota fiscal da mercadoria, acrescido de frete e impostos, podendo incluir lucro esperado.' },
    ],
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AllInsurancesModal = ({ isOpen, onClose }: Props) => {
  const [selected, setSelected] = useState<InsuranceDetail | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="bg-background border border-current/10 rounded-3xl shadow-2xl w-full max-w-lg p-8 relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="mb-6">
            <div className="inline-block px-3 py-1 rounded-full border border-current/10 bg-foreground/5 text-text-secondary text-[10px] font-bold mb-4 tracking-widest uppercase">
              London Seguros
            </div>
            <h3 className="text-2xl font-black text-text-primary tracking-tight">Todos os Seguros</h3>
            <p className="text-text-secondary text-sm mt-1">Clique em um seguro para saber mais.</p>
          </div>

          <ul className="grid grid-cols-2 gap-3">
            {insurances.map((item) => (
              <li key={item.title}>
                <button
                  onClick={() => setSelected(item)}
                  className="w-full flex items-center gap-3 glass rounded-xl px-4 py-3 hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all group text-left"
                >
                  <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                  <span className="text-text-primary text-sm font-medium flex-1">{item.title.replace('Seguro de ', '').replace('Seguro para ', '').replace('Seguro ', '')}</span>
                  <ChevronRight className="w-3 h-3 text-text-muted group-hover:text-brand-blue transition-colors shrink-0" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 rounded-2xl transition-all"
          >
            Fechar
          </button>
        </div>
      </div>

      <InsuranceModal data={selected} onClose={() => setSelected(null)} />
    </>
  );
};
