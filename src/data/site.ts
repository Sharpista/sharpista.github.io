export const siteConfig = {
  brand: 'Alexandre Filho.',
  name: 'Alexandre Filho',
  tagline: 'Software Engineering & Consulting',
  url: 'https://sharpista.github.io/',
  homeTitle: 'Alexandre Filho. — Software Engineering & Consulting',
  homeDescription:
    'Consultoria independente de engenharia de software: desenvolvimento de sistemas, arquitetura de soluções, modernização tecnológica e cloud para empresas que precisam evoluir.',
  /**
   * Canais de contato exibidos no site.
   * Configure via `.env.local` ou variáveis VITE_ do ambiente github-pages no Actions.
   * Links vazios simplesmente não são exibidos — nunca são inventados.
   */
  contacts: {
    email: import.meta.env.VITE_CONTACT_EMAIL ?? '',
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER ?? '',
    linkedin: import.meta.env.VITE_LINKEDIN_URL ?? '',
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Sharpista',
  },
  /**
   * Endpoint público do formulário (Formspree ou similar).
   * Configure via `.env.local`: VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxx
   * Não use variáveis VITE_ para segredos: elas são embutidas no bundle público.
   */
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT ?? '',
} as const

export interface NavItem {
  readonly label: string
  readonly path: string
}

export const navItems: ReadonlyArray<NavItem> = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Contato', path: '/contato' },
]

export const serviceOptions = [
  'Desenvolvimento',
  'Arquitetura',
  'Modernização',
  'Cloud & DevOps',
  'Integrações',
  'Consultoria Técnica',
  'Outro',
] as const

export type ServiceOption = (typeof serviceOptions)[number]

export interface Differential {
  readonly title: string
  readonly text: string
}

export const differentials: ReadonlyArray<Differential> = [
  {
    title: 'Visão de negócio',
    text: 'Decisões técnicas orientadas a objetivos, custos e riscos — e não a modismos de tecnologia.',
  },
  {
    title: 'Arquitetura sustentável',
    text: 'Soluções desenhadas para evoluir no ritmo do negócio, com manutenibilidade e escalabilidade em mente.',
  },
  {
    title: 'Qualidade e confiabilidade',
    text: 'Testes, code review e refatoração contínua tratados como práticas de engenharia, não como exceção.',
  },
  {
    title: 'Experiência corporativa',
    text: 'Atuação em ambientes que exigem segurança, desempenho e evolução constante dos sistemas.',
  },
]
