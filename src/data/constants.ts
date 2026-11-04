export const COMPANY = {
  name: 'Rápida Visão',
  fullName: 'Rápida Visão — Vistoria Cautelar',
  tagline: 'Experiente, Detalhada, Rápida e Barata!',
  unit: 'Unidade Pelotas — RS',
  city: 'Pelotas',
  state: 'RS',
  contactPerson: 'Gustavo',
  phoneDisplay: '(53) 99712-2093',
  phoneRaw: '5553997122093',
  address: 'Atendimento presencial em toda Pelotas e Região (vamos até o veículo)',
  instagramUrl: 'https://instagram.com/rapidavisao',
  website: 'https://rapidavisao.com.br',
};

export const ASSETS = {
  logo: 'https://rapidavisao.com.br/logotipo.jpeg',
  heroVideo: 'https://rapidavisao.com.br/hero-video.mp4',
  paintVideo: 'https://rapidavisao.com.br/analisedepintura.mp4',
  bestInspectors: 'https://rapidavisao.com.br/osmelhoresvistoriadores.jpeg',
  withHistory: 'https://rapidavisao.com.br/vistoria-com-historico.jpg',
  withoutHistory: 'https://rapidavisao.com.br/vistoria-sem-historico.jpg',
  onlyPaint: 'https://rapidavisao.com.br/somentepintura.jpeg',
  onlyHistory: 'https://rapidavisao.com.br/apenas-historico.jpeg',
  franchise: 'https://rapidavisao.com.br/melhorproposta.jpeg',
  assistantAvatar: '/images/atendente_virtual_avatar_1793749628749.jpg',
  inspectorUniform: '/images/vistoriador_jaleco_uniforme_1793750559842.jpg',
};

export const GOOGLE_CERTIFICATE = {
  rating: '5.0',
  totalReviews: 284,
  badgeTitle: 'Certificado Oficial Google',
  badgeSubtitle: 'Classificação Máxima de 5.0 Estrelas no Google Avaliações',
  verifiedText: 'Empresa Verificada no Google Meu Negócio • Pelotas - RS',
};

export const GOOGLE_REVIEWS_LIST = [
  {
    author: 'Marcos Vinícius Silveira',
    timeAgo: 'há 1 semana',
    city: 'Pelotas - RS (Fragata)',
    rating: 5,
    text: 'Contratei o Gustavo da Rápida Visão para olhar um Corolla em uma loja na Fernando Osório. Ele foi até o local no mesmo dia com o jaleco oficial da empresa e os equipamentos digitais. Detectou que o para-lama e a porta traseira já tinham sido repintados com massa plástica, e no histórico achou uma passagem por leilão que o vendedor não tinha falado. Me livrou de um prejuízo de mais de 30 mil reais! Laudo de 20 páginas impecável. Recomendo de olhos fechados!',
    service: 'Vistoria Cautelar com Histórico (R$ 250)',
  },
  {
    author: 'Dra. Fernanda L. Tavares',
    timeAgo: 'há 2 semanas',
    city: 'Pelotas - RS (Centro)',
    rating: 5,
    text: 'Excelente atendimento do Gustavo! Medição de pintura peça por peça, olhou todas as vigas, vidros e chassi. Muito atencioso, explicou cada ponto do laudo em PDF. A vistoria foi rápida e o preço de R$ 250 é o melhor da região de Pelotas pelo nível de detalhe entregue.',
    service: 'Vistoria Cautelar Completa',
  },
  {
    author: 'Rodrigo Medeiros',
    timeAgo: 'há 3 semanas',
    city: 'Rio Grande - RS (Comprou em Pelotas)',
    rating: 5,
    text: 'Sou de Rio Grande e estava comprando um Renegade anunciado em Pelotas. Não tinha como me deslocar só para ver o carro. O Gustavo foi até o estacionamento, fez a vistoria completa, gravou vídeo mostrando os mínimos detalhes e me mandou o laudo de 20 páginas em PDF. Comprei com 100% de segurança e tranquilidade. Nota 10!',
    service: 'Vistoria com Histórico & Vídeo',
  },
  {
    author: 'Lucas Garcia da Silva',
    timeAgo: 'há 1 mês',
    city: 'Pelotas - RS (Três Vendas)',
    rating: 5,
    text: 'A Rápida Visão tem padrão de excelência de verdade. Vistoriador com uniforme/jaleco com logo oficial nas costas, equipamentos de precisão aferindo cada micra da tinta. Consegui negociar um desconto de R$ 3.000 no valor do carro graças aos apontamentos técnicos do laudo. Vale cada centavo!',
    service: 'Vistoria Cautelar Estrutural',
  },
];

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINKS = {
  general: getWhatsAppUrl('Olá, Gustavo! Gostaria de saber mais sobre a vistoria cautelar.'),
  hero: getWhatsAppUrl('Olá, Gustavo! Tenho interesse na vistoria cautelar com histórico por R$ 250,00. Gostaria de mais informações.'),
  withHistory: getWhatsAppUrl('Olá, Gustavo! Quero agendar a Vistoria Cautelar Estrutural com Histórico por R$ 250,00.'),
  withoutHistory: getWhatsAppUrl('Olá, Gustavo! Quero agendar a Vistoria Cautelar Estrutural sem Histórico por R$ 200,00.'),
  onlyPaint: getWhatsAppUrl('Olá, Gustavo! Gostaria de agendar a Somente Análise de Pintura por R$ 180,00.'),
  onlyHistory: getWhatsAppUrl('Olá, Gustavo! Gostaria de solicitar o serviço Somente Histórico Documental por R$ 100,00.'),
  franchise: getWhatsAppUrl('Olá, Gustavo! Tenho interesse na Oportunidade de Negócio para ter uma Unidade da Rápida Visão na minha região.'),
  scheduleInspection: getWhatsAppUrl('Olá, Gustavo! Quero solicitar minha vistoria cautelar em Pelotas.'),
};

export interface PricingCardData {
  id: string;
  title: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
  whatsappUrl: string;
  isPopular?: boolean;
}

export const PRICING_PACKAGES: PricingCardData[] = [
  {
    id: 'com-historico',
    title: 'Vistoria cautelar estrutural com histórico',
    price: 'R$ 250,00',
    badge: 'MAIS PROCURADO',
    description: 'Completa com histórico documental – 20 páginas em PDF nítido',
    features: [
      'Histórico completo (leilão, sinistro, roubo/furto e débitos)',
      'Análise de pintura peça por peça com medidor digital',
      'Inspeção estrutural (vigas, longarinas, painel frontal/traseiro)',
      'Conferência de motor, chassi e vidros',
      'Checagem eletrônica e hodômetro',
      'Laudo técnico de 20 páginas em PDF',
      'Vídeo gravado interno e externo se solicitado previamente',
    ],
    image: ASSETS.withHistory,
    ctaText: 'Garantir Vistoria Completa',
    whatsappUrl: WHATSAPP_LINKS.withHistory,
    isPopular: true,
  },
  {
    id: 'sem-historico',
    title: 'Vistoria cautelar estrutural sem histórico',
    price: 'R$ 200,00',
    description: 'Análise física e estrutural presencial de todos os componentes do veículo',
    features: [
      'Análise de pintura peça por peça',
      'Inspeção de vigas, longarinas e soldas originais',
      'Conferência das autenticações obrigatórias',
      'Análise de vidros, numeração de motor e chassi',
      'Inspeção de pneus, rodas e desgastes',
      'Teste de ar-condicionado e luzes de avaria',
      'Laudo estrutural emitido por perito experiente',
    ],
    image: ASSETS.withoutHistory,
    ctaText: 'Agendar Vistoria Estrutural',
    whatsappUrl: WHATSAPP_LINKS.withoutHistory,
  },
  {
    id: 'somente-pintura',
    title: 'Somente análise de pintura',
    price: 'R$ 180,00',
    description: 'Verificação minuciosa com micrômetro digital para identificar repinturas e massa',
    features: [
      'Medição de espessura de tinta em todos os painéis',
      'Detecção de retoques, massa plástica e repinturas',
      'Identificação de peças substituídas ou reparadas',
      'Avaliação da textura e originalidade do verniz',
      'Mapa descritivo de micronagem da lataria',
      'Atendimento no local do veículo em Pelotas',
    ],
    image: ASSETS.onlyPaint,
    ctaText: 'Solicitar Análise de Pintura',
    whatsappUrl: WHATSAPP_LINKS.onlyPaint,
  },
  {
    id: 'somente-historico',
    title: 'Somente histórico',
    price: 'R$ 100,00',
    description: 'Pesquisa documental aprofundada nas maiores bases de dados do Brasil',
    features: [
      'Apontamento de Leilão (pequena, média ou grande monta)',
      'Histórico de Sinistro e indenização integral',
      'Restrições judiciais, RENAJUD e alienação fiduciária',
      'Checagem de multas, IPVA e débitos estaduais/federais',
      'Alerta de roubo e furto atual e pregressos',
      'Entrega 100% digital e ágil via WhatsApp / PDF',
    ],
    image: ASSETS.onlyHistory,
    ctaText: 'Puxar Histórico Completo',
    whatsappUrl: WHATSAPP_LINKS.onlyHistory,
  },
];

export const INCLUDED_SERVICES = [
  {
    title: 'Análise completa da pintura, com medição por peça',
    desc: 'Medição precisa em micras com micrômetro digital para detectar qualquer repintura ou massa plástica.',
  },
  {
    title: 'Conferência das autenticações obrigatórias',
    desc: 'Verificação detalhada das etiquetas de identificação, lacres e selos de segurança do fabricante.',
  },
  {
    title: 'Análise estrutural, incluindo vigas e longarinas',
    desc: 'Inspeção minuciosa de colunas A, B e C, caixas de ar, assoalho, longarinas dianteiras e traseiras.',
  },
  {
    title: 'Análise dos vidros',
    desc: 'Checagem de gravação do chassi e código do fabricante em todos os vidros e para-brisa.',
  },
  {
    title: 'Conferência das numerações de motor e chassi',
    desc: 'Validação da tipografia original e conferência contra adulterações, remarcações ou lixamento.',
  },
  {
    title: 'Verificação de luzes de avaria ligadas',
    desc: 'Checagem no painel do veículo: injeção eletrônica, airbag, ABS, controle de tração e câmbio.',
  },
  {
    title: 'Checagem do hodômetro no painel',
    desc: 'Análise de coerência entre a quilometragem exibida, desgaste do volante, pedais e histórico.',
  },
  {
    title: 'Avaliação interna de bancos, forros e multimídia',
    desc: 'Inspeção de acabamentos, funcionamento de botões, vidros elétricos, travas e sistema de entretenimento.',
  },
  {
    title: 'Teste do ar-condicionado',
    desc: 'Verificação da eficiência de refrigeração e acionamento mecânico do compressor.',
  },
  {
    title: 'Inspeção dos pneus, incluindo ano e desgaste',
    desc: 'Checagem do índice TWI de desgaste, deformações, bolhas e ano de fabricação (DOT).',
  },
  {
    title: 'Avaliação das rodas, com imagens e estado de cada uma',
    desc: 'Fotos e avaliação visual de riscos, trincas, amassados ou reparos de solda em todas as rodas.',
  },
  {
    title: 'Vídeo externo e interno, quando solicitado antes da vistoria',
    desc: 'Gravação em alta definição mostrando detalhes reais do carro para quem compra à distância.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Contato',
    desc: 'Você chama o Gustavo pelo WhatsApp clicando no botão. Informa o modelo do veículo e o local em Pelotas ou região.',
  },
  {
    step: '02',
    title: 'Agendamento',
    desc: 'Combinamos rapidamente o melhor dia, horário e o endereço exato do carro (loja, garagem ou residência).',
  },
  {
    step: '03',
    title: 'Vistoria',
    desc: 'O vistoriador experiente vai até o local com equipamentos de alta tecnologia e realiza a perícia completa.',
  },
  {
    step: '04',
    title: 'Entrega do Laudo',
    desc: 'Você recebe o Laudo Cautelar completo em PDF nítido (média de 20 páginas) e fotos/vídeos no seu WhatsApp.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'O que é a vistoria cautelar e por que ela é indispensável em Pelotas?',
    answer:
      'A vistoria cautelar é uma perícia técnica automotiva minuciosa que atesta se o carro já sofreu acidentes graves com corte de longarina, se tem histórico de leilão, furto, sinistro, repinturas ou adulteração de chassi. Em Pelotas e região sul, comprar com laudo cautelar da Rápida Visão protege você de perder dinheiro e garante uma negociação segura.',
  },
  {
    question: 'Vocês vão até a loja, concessionária ou casa do vendedor?',
    answer:
      'Sim! Nosso atendimento é 100% móvel e rápido. Nós nos deslocamos até onde o veículo estiver localizado em Pelotas (lojas na Av. Fernando Osório, Av. Bento Gonçalves, concessionárias, garagens ou residências particulares). Você nem precisa sair de casa.',
  },
  {
    question: 'Como funciona a medição da pintura com micrômetro?',
    answer:
      'Utilizamos equipamento digital de alta precisão que afere a espessura em micras (µm) da camada de tinta e verniz em cada painel da carroceria. Assim descobrimos se o carro tem pintura original de fábrica, repinturas leves ou camadas pesadas de massa plástica resultantes de batidas graves.',
  },
  {
    question: 'Quanto tempo demora a vistoria e a entrega do laudo?',
    answer:
      'A inspeção física do veículo leva em média de 40 a 60 minutos. O laudo documental e técnico completo em PDF (com cerca de 20 páginas) é entregue no mesmo dia diretamente pelo WhatsApp.',
  },
  {
    question: 'Posso solicitar vídeo do carro se eu moro em outra cidade?',
    answer:
      'Com certeza! Se você mora fora de Pelotas e está comprando um carro na cidade, basta nos avisar antes da vistoria e gravaremos um vídeo em alta definição mostrando o veículo detalhadamente por dentro e por fora.',
  },
];
