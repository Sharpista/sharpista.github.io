import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded'
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded'
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded'
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded'
import type { ComponentType } from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import { Section, SectionHeading } from '../../ui/Section'
import { differentials } from '../../../data/site'

const pillarIcons = [InsightsRoundedIcon, ArchitectureRoundedIcon, FactCheckRoundedIcon, BusinessCenterRoundedIcon]

function pillarIconFor(index: number): ComponentType<SvgIconProps> {
  return pillarIcons[index % pillarIcons.length]
}

export function Differentials() {
  return (
    <Section id="diferenciais" bordered ariaLabelledBy="titulo-diferenciais">
      <SectionHeading
        id="titulo-diferenciais"
        eyebrow="Diferenciais"
        title="Engenharia além do código."
        subtitle="Uma consultoria conduzida por princípios de engenharia que realmente sustentam o crescimento do negócio."
      />

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        }}
      >
        {differentials.map((differential, index) => {
          const Icon = pillarIconFor(index)
          return (
            <Stack
              key={differential.title}
              component="article"
              spacing={1.5}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                bgcolor: 'background.paper',
              }}
            >
              <Icon aria-hidden="true" sx={{ color: 'text.secondary' }} />
              <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                {differential.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {differential.text}
              </Typography>
            </Stack>
          )
        })}
      </Box>
    </Section>
  )
}
