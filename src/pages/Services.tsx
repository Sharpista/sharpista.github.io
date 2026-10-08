import { PageHeader } from '../components/ui/PageHeader'
import { ServicesList, Methodology } from '../components/sections/services/ServicesList'
import { FinalCta } from '../components/sections/FinalCta'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Services() {
  usePageMeta({
    title: 'Serviços',
    description:
      'Serviços de engenharia de software: desenvolvimento de sistemas, arquitetura, modernização, cloud & DevOps, integrações e consultoria técnica.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Soluções de engenharia para desafios reais."
        description="Serviços especializados para empresas que precisam construir, modernizar e evoluir suas soluções tecnológicas."
      />
      <ServicesList />
      <Methodology />
      <FinalCta
        title="Vamos desenhar a próxima etapa."
        description="Solicite uma consultoria e receba uma avaliação clara sobre arquitetura, desenvolvimento e evolução do seu cenário atual."
        buttonLabel="Solicitar uma consultoria"
      />
    </>
  )
}
