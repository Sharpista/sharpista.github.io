export interface Company {
  readonly name: string
  readonly sector: string
  readonly description: string
}

/**
 * Organizações da trajetória profissional.
 *
 * Sem datas, cargos, projetos ou sistemas internos.
 * Estas organizações NÃO são clientes ou parceiros da consultoria.
 */
export const companies: ReadonlyArray<Company> = [
  {
    name: 'Itaú Unibanco',
    sector: 'Financeiro',
    description:
      'Experiência em engenharia de software em ambiente corporativo do setor financeiro.',
  },
  {
    name: 'XP Inc.',
    sector: 'Mercado Financeiro',
    description:
      'Atuação em desenvolvimento backend, automações, integrações de sistemas e tecnologias em nuvem.',
  },
  {
    name: 'Banco ABC Brasil',
    sector: 'Bancário',
    description:
      'Experiência no desenvolvimento de aplicações corporativas e integrações utilizando tecnologias .NET.',
  },
  {
    name: 'Radix Engenharia e Software',
    sector: 'Tecnologia e Engenharia',
    description:
      'Atuação em desenvolvimento full stack, manutenção e modernização de sistemas, microsserviços e cloud computing.',
  },
  {
    name: 'Tribunal de Justiça de Mato Grosso',
    sector: 'Público',
    description:
      'Experiência em engenharia de software, arquitetura de aplicações, desenvolvimento de APIs, persistência de dados e qualidade de código.',
  },
]

export const companiesDisclaimer =
  'Organizações da trajetória profissional — não clientes ou parceiros da consultoria.'
