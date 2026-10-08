import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Section, SectionHeading } from '../../ui/Section'
import { services, methodologySteps } from '../../../data/services'

export function ServicesList() {
  return (
    <Section id="servicos" ariaLabelledBy="titulo-servicos">
      <Stack spacing={0}>
        {services.map((service, index) => (
          <Box
            key={service.id}
            component="article"
            sx={{
              py: { xs: 4, md: 6 },
              borderTop: index === 0 ? '1px solid' : undefined,
              borderBottom: '1px solid',
              borderColor: 'divider',
              display: 'grid',
              gap: { xs: 2.5, md: 6 },
              gridTemplateColumns: { xs: '1fr', md: '220px 1fr' },
              alignItems: 'start',
            }}
          >
            <Typography
              variant="h3"
              component="span"
              sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, color: 'text.secondary' }}
            >
              {service.number}
            </Typography>

            <Stack spacing={2}>
              <Typography variant="h3" component="h3">
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
                {service.description}
              </Typography>
              {service.tech.length > 0 && (
                <Box
                  sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1.5 }}
                  aria-label={`Tecnologias associadas a ${service.title}`}
                >
                  {service.tech.map((tech) => (
                    <Box
                      key={tech}
                      component="span"
                      sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.5,
                        typography: 'body2',
                        color: 'text.secondary',
                        bgcolor: 'background.paper',
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              )}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Section>
  )
}

export function Methodology() {
  return (
    <Section id="metodologia" bordered ariaLabelledBy="titulo-metodologia">
      <SectionHeading
        id="titulo-metodologia"
        eyebrow="Metodologia"
        title="Uma abordagem clara para cada desafio."
        subtitle="Um processo enxuto e adaptado ao tipo de serviço e à necessidade de cada cliente — sempre com entregas incrementais e comunicação transparente."
      />

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        }}
      >
        {methodologySteps.map((step) => (
          <Stack
            key={step.number}
            component="article"
            spacing={1.5}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 3,
              p: { xs: 3, md: 3.5 },
              bgcolor: 'background.paper',
            }}
          >
            <Typography variant="h3" component="span" color="text.secondary" sx={{ fontSize: '1.5rem' }}>
              {step.number}
            </Typography>
            <Typography variant="h4" component="h3">
              {step.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {step.text}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Section>
  )
}
