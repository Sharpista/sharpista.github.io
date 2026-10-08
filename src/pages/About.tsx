import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded'
import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import type { ComponentType } from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import { PageHeader } from '../components/ui/PageHeader'
import { Section } from '../components/ui/Section'
import { CompaniesTimeline } from '../components/sections/about/CompaniesTimeline'
import { TechnologiesGroups } from '../components/sections/about/TechnologiesGroups'
import { FinalCta } from '../components/sections/FinalCta'
import { usePageMeta } from '../hooks/usePageMeta'

interface Highlight {
  readonly icon: ComponentType<SvgIconProps>
  readonly text: string
}

const highlights: ReadonlyArray<Highlight> = [
  { icon: ScheduleRoundedIcon, text: 'Mais de 5 anos de experiência.' },
  { icon: CodeRoundedIcon, text: 'Especialização em C# e .NET.' },
  { icon: ApartmentRoundedIcon, text: 'Experiência em ambientes corporativos.' },
  { icon: CloudRoundedIcon, text: 'Conhecimento em arquitetura e cloud.' },
]

export default function About() {
  usePageMeta({
    title: 'Sobre & Experiência',
    description:
      'Trajetória de Alexandre Filho em engenharia de software: mais de 5 anos em ambientes corporativos, com foco em .NET, arquitetura, cloud e qualidade.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Sobre mim"
        title="Experiência, engenharia e visão de negócio."
        description="Consultoria independente de engenharia de software, construída sobre uma trajetória em ambientes corporativos exigentes."
      />

      <Section id="sobre" ariaLabelledBy="titulo-sobre-mim">
        <Stack spacing={3} sx={{ maxWidth: 760 }}>
          <Typography variant="h2" id="titulo-sobre-mim" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Sobre a minha atuação
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Sou Alexandre Filho, profissional de Engenharia de Software com mais de 5 anos de
            experiência no desenvolvimento, evolução e modernização de aplicações corporativas.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Minha atuação é focada no ecossistema .NET, arquitetura de software, integrações, cloud
            computing e qualidade de engenharia.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Ao longo da minha trajetória, desenvolvi experiência em ambientes corporativos que exigem
            confiabilidade, segurança, desempenho e evolução contínua.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Hoje, aplico esse conhecimento para oferecer serviços especializados de engenharia de
            software e consultoria tecnológica.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: 2.5,
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            mt: { xs: 5, md: 7 },
          }}
        >
          {highlights.map((item) => (
            <Stack
              key={item.text}
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                px: 2.5,
                py: 2,
                bgcolor: 'background.paper',
              }}
            >
              <item.icon aria-hidden="true" sx={{ color: 'text.secondary' }} />
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {item.text}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Section>

      <CompaniesTimeline />
      <TechnologiesGroups />
      <FinalCta
        title="Quero entender o seu contexto."
        description="Conte o cenário atual da sua operação e descubra como a engenharia de software pode apoiar sua evolução."
        buttonLabel="Iniciar uma conversa"
      />
    </>
  )
}
