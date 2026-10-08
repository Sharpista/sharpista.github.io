import Box from '@mui/material/Box'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { ContactChannelsSection } from '../components/forms/ContactChannelsSection'
import { ContactForm } from '../components/forms/ContactForm'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta({
    title: 'Contato',
    description:
      'Fale com Alexandre Filho sobre desenvolvimento de software, arquitetura, modernização de sistemas, cloud e consultoria técnica.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar sobre seu próximo desafio?"
        description="Se sua empresa precisa desenvolver uma aplicação, modernizar sistemas ou evoluir sua arquitetura tecnológica, entre em contato para avaliarmos as possibilidades."
      />

      <Section id="contato" ariaLabelledBy="titulo-instrucoes">
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 6, md: 10 },
            gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
          }}
        >
          <ContactChannelsSection />
          <ContactForm />
        </Box>
      </Section>
    </>
  )
}
