export interface Service {
  readonly id: string
  readonly number: string
  readonly title: string
  readonly description: string
  readonly tech: ReadonlyArray<string>
}

/**
 * Serviços detalhados (página Serviços).
 */
export const services: ReadonlyArray<Service> = [
  {
    id: 'development',
    number: '01',
    title: 'Desenvolvimento de Software',
    description:
      'Desenvolvimento de APIs REST, aplicações corporativas, sistemas web e plataformas digitais utilizando tecnologias modernas e boas práticas.',
    tech: ['C#', '.NET', 'ASP.NET Core', 'Angular', 'React', 'SQL Server', 'PostgreSQL'],
  },
  {
    id: 'architecture',
    number: '02',
    title: 'Arquitetura de Software',
    description:
      'Planejamento e evolução de arquiteturas com foco em escalabilidade, manutenibilidade e alinhamento às necessidades do negócio.',
    tech: ['DDD', 'SOLID', 'Clean Architecture', 'Arquitetura hexagonal', 'Microsserviços'],
  },
  {
    id: 'modernization',
    number: '03',
    title: 'Modernização de Sistemas',
    description:
      'Evolução de aplicações legadas, atualização tecnológica, refatoração e melhoria da qualidade do software.',
    tech: ['Refatoração', 'Atualização tecnológica', 'Qualidade de código'],
  },
  {
    id: 'cloud',
    number: '04',
    title: 'Cloud & DevOps',
    description:
      'Apoio à construção e evolução de aplicações em nuvem, conteinerização e automação de entregas.',
    tech: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    id: 'integration',
    number: '05',
    title: 'Integração de Sistemas',
    description:
      'Integração entre aplicações utilizando APIs REST, mensageria e processamento assíncrono.',
    tech: ['Kafka', 'RabbitMQ', 'Sistemas distribuídos'],
  },
  {
    id: 'consulting',
    number: '06',
    title: 'Consultoria Técnica',
    description:
      'Avaliação de arquitetura, revisão de código, análise de riscos, recomendações técnicas e apoio à tomada de decisões tecnológicas.',
    tech: ['Assessment', 'Revisão de código', 'Gestão de riscos técnicos'],
  },
]

export type HighlightIconKey = 'code' | 'account_tree' | 'autorenew' | 'integrations'

export interface ServiceHighlight {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly icon: HighlightIconKey
}

/**
 * Serviços em destaque (página inicial).
 */
export const highlightServices: ReadonlyArray<ServiceHighlight> = [
  {
    id: 'development',
    title: 'Desenvolvimento de Software',
    description: 'Construção de APIs, sistemas corporativos e aplicações personalizadas.',
    icon: 'code',
  },
  {
    id: 'architecture',
    title: 'Arquitetura de Soluções',
    description: 'Estruturas escaláveis, sustentáveis e preparadas para evoluir.',
    icon: 'account_tree',
  },
  {
    id: 'modernization',
    title: 'Modernização Tecnológica',
    description: 'Refatoração, atualização e evolução de sistemas existentes.',
    icon: 'autorenew',
  },
  {
    id: 'integrations',
    title: 'Cloud & Integrações',
    description: 'Soluções em nuvem, integração de APIs e comunicação entre sistemas.',
    icon: 'integrations',
  },
]

export interface MethodologyStep {
  readonly number: string
  readonly title: string
  readonly text: string
}

export const methodologySteps: ReadonlyArray<MethodologyStep> = [
  {
    number: '01',
    title: 'Diagnóstico',
    text: 'Entendimento do contexto, objetivos e restrições do seu cenário.',
  },
  {
    number: '02',
    title: 'Planejamento',
    text: 'Definição do escopo, da abordagem técnica e dos critérios de entrega.',
  },
  {
    number: '03',
    title: 'Implementação',
    text: 'Execução com padrões de engenharia, testes e transparência no andamento.',
  },
  {
    number: '04',
    title: 'Entrega e evolução',
    text: 'Entrega com documentação e evolução contínua a partir dos resultados.',
  },
]

export const methodologyNote =
  'O processo é adaptado ao tipo de serviço e à necessidade de cada cliente — cada engajamento começa por um diagnóstico e segue com entregas incrementais, sempre com comunicação clara.'
