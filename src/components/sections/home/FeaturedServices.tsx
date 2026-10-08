import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded'
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded'
import HubRoundedIcon from '@mui/icons-material/HubRounded'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import type { ComponentType } from 'react'
import { Section, SectionHeading } from '../../ui/Section'
import { SectionFooterLink } from '../../ui/SectionFooterLink'
import { highlightServices, type HighlightIconKey } from '../../../data/services'

const iconMap: Record<HighlightIconKey, ComponentType<SvgIconProps>> = {
  code: CodeRoundedIcon,
  account_tree: AccountTreeRoundedIcon,
  autorenew: AutorenewRoundedIcon,
  integrations: HubRoundedIcon,
}

export function FeaturedServices() {
  return (
    <Section id="servicos-destaque" bordered ariaLabelledBy="titulo-servicos-destaque">
      <SectionHeading
        id="titulo-servicos-destaque"
        eyebrow="Serviços"
        title="Tecnologia construída para evoluir."
        subtitle="Soluções que unem engenharia de qualidade e alinhamento ao negócio — do desenho da arquitetura à entrega em produção."
      />

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          mb: 4,
        }}
      >
        {highlightServices.map((service) => {
          const Icon = iconMap[service.icon]
          return (
            <Card key={service.id} variant="outlined" sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column' }}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      display: 'grid',
                      placeItems: 'center',
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Icon aria-hidden="true" fontSize="small" />
                  </Box>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{ fontSize: { xs: '1.125rem', md: '1.25rem' } }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          )
        })}
      </Box>

      <Stack sx={{ alignItems: 'flex-start' }}>
        <SectionFooterLink to="/servicos" label="Conhecer todos os serviços" headingId="titulo-servicos-destaque" />
      </Stack>
    </Section>
  )
}
