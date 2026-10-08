export interface TechnologyGroup {
  readonly category: string
  readonly items: ReadonlyArray<string>
}

export const technologyGroups: ReadonlyArray<TechnologyGroup> = [
  {
    category: 'Backend',
    items: ['C#', '.NET', 'ASP.NET Core', 'EF Core', 'MediatR', 'FluentValidation'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Arquitetura',
    items: ['Clean Architecture', 'DDD', 'SOLID', 'Microsserviços', 'Arquitetura hexagonal'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Azure DevOps', 'CI/CD'],
  },
  {
    category: 'Dados',
    items: ['PostgreSQL', 'SQL Server', 'MongoDB'],
  },
  {
    category: 'Mensageria',
    items: ['Kafka', 'RabbitMQ'],
  },
  {
    category: 'Qualidade',
    items: ['Testes unitários', 'Testes de integração', 'Code Review', 'Refatoração'],
  },
]
