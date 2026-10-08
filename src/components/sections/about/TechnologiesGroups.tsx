import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import { Section, SectionHeading } from '../../ui/Section'
import { technologyGroups } from '../../../data/technologies'

export function TechnologiesGroups() {
  return (
    <Section id="especialidades" bordered ariaLabelledBy="titulo-especialidades">
      <SectionHeading
        id="titulo-especialidades"
        eyebrow="Especialidades técnicas"
        title="Tecnologias que sustentam essas entregas."
        subtitle="Ferramentas e padrões aplicados de acordo com o contexto, a maturidade e os objetivos de cada projeto."
      />

      <Stack spacing={4}>
        {technologyGroups.map((group) => (
          <Stack key={group.category} spacing={1.5}>
            <Typography
              variant="overline"
              component="p"
              color="text.secondary"
              sx={{ letterSpacing: '0.14em' }}
            >
              {group.category}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {group.items.map((item) => (
                <Box
                  key={item}
                  component="li"
                  sx={{
                    listStyle: 'none',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    px: 1.75,
                    py: 0.75,
                    typography: 'body2',
                    color: 'text.primary',
                    bgcolor: 'background.paper',
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Stack>
        ))}
      </Stack>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 5, maxWidth: 640 }}>
        Quer conhecer como essas especialidades podem ser aplicadas ao seu contexto?{' '}
        <Link component={RouterLink} to="/servicos" color="inherit" fontWeight={600}>
          Veja os serviços disponíveis
        </Link>
        .
      </Typography>
    </Section>
  )
}
