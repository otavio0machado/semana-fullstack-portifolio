import { Night, Instructor } from './types';

export const EVENT = {
  name: 'Semana React',
  edition: 'edição 03 · outubro de 2026',
  // Data fixa do começo do evento (não countdown auto-5-dias do template original)
  startDate: new Date('2026-10-19T20:00:00-03:00'),
  endDate: new Date('2026-10-25T21:00:00-03:00'),
  liveUrl: 'https://youtube.com/@semanareact/live',
  channelUrl: 'https://youtube.com/@semanareact',
  totalRegistered: 4127,
  registrationsLastEdition: 2890,
};

export const NIGHTS: Night[] = [
  {
    n: '01',
    date: '19/10',
    weekday: 'Domingo',
    time: '20h–21h',
    title: 'Setup, Vite e o primeiro componente',
    agenda: [
      'Por que React (e quando NÃO usar React)',
      'Vite vs CRA vs Next: diferença prática',
      'Estrutura do primeiro projeto',
      'JSX é só açúcar sintático — ver o que vira',
    ],
    instructor: 'Otávio',
  },
  {
    n: '02',
    date: '20/10',
    weekday: 'Segunda',
    time: '20h–21h',
    title: 'Estado, useState e a regra dos hooks',
    agenda: [
      'Estado vs prop, e por que importa',
      'useState com tipos primitivos',
      'A regra dos hooks: por que não pode dentro de if',
      'Quando o estado deve subir (lifting state up)',
    ],
    instructor: 'Otávio',
  },
  {
    n: '03',
    date: '21/10',
    weekday: 'Terça',
    time: '20h–21h',
    title: 'Listas, chaves e formulário controlado',
    agenda: [
      'Map em JSX e por que key não pode ser index',
      'Input controlado vs input default',
      'Validação simples, sem biblioteca',
      'Erros comuns: estado de controle não atualizando',
    ],
    instructor: 'Renata Yano',
  },
  {
    n: '04',
    date: '22/10',
    weekday: 'Quarta',
    time: '20h–21h',
    title: 'useEffect — o que faz e o que não faz',
    agenda: [
      'O que NÃO é useEffect (não é "executar depois do render")',
      'Cleanup function e quando ela importa',
      'Dependency array: regras práticas',
      'Quando substituir useEffect por outra coisa',
    ],
    instructor: 'Otávio',
  },
  {
    n: '05',
    date: '23/10',
    weekday: 'Quinta',
    time: '20h–21h',
    title: 'Fetch, loading, erro — o trio que cai em entrevista',
    agenda: [
      'AbortController e cancelamento de request',
      'Loading skeleton vs spinner',
      'Tratamento de erro que não vaza pra usuário final',
      'Cache local com useReducer ou nada',
    ],
    instructor: 'Renata Yano',
  },
  {
    n: '06',
    date: '24/10',
    weekday: 'Sexta',
    time: '20h–21h',
    title: 'Roteamento com React Router e o problema das rotas aninhadas',
    agenda: [
      'BrowserRouter, Routes, Route — anatomia',
      'Outlet e layout compartilhado',
      'Loaders (v6.4+) e onde eles brigam com componentes',
      'Quando subir pra Next em vez de continuar com Router',
    ],
    instructor: 'Caio Petrenko',
  },
  {
    n: '07',
    date: '25/10',
    weekday: 'Sábado',
    time: '20h–21h',
    title: 'Deploy real no Vercel + 3 perguntas que você vai ouvir',
    agenda: [
      'Build de produção vs dev — o que muda',
      'Variável de ambiente que vaza pra cliente vs servidor',
      'Vercel preview deploy + GitHub Actions básico',
      'Encerramento com Q&A aberto',
    ],
    instructor: 'Otávio + convidados',
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    name: 'Otávio Machado',
    role: 'Full-stack engineer · Java/React · sistemas regulados',
    github: 'otavio0machado',
  },
  {
    name: 'Renata Yano',
    role: 'Front-end senior · acessibilidade e formulários complexos',
    github: 'rrenata-yano',
  },
  {
    name: 'Caio Petrenko',
    role: 'Engenheiro Next.js · roteamento e SSR',
    github: 'cpetrenko',
  },
];
