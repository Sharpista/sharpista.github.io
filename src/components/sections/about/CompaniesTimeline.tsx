import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Section, SectionHeading } from '../../ui/Section'
import { companies, companiesDisclaimer } from '../../../data/companies'

export function CompaniesTimeline() {
  return (
    <Section id="trajetoria" bordered ariaLabelledBy="titulo-trajetoria">
      <SectionHeading
        id="titulo-trajetoria"
        eyebrow="Trajetória profissional"
        title="Empresas que fazem parte da minha trajetória."
        subtitle="Ambientes corporativos exigentes, com forte crédito por confiabilidade, segurança e qualidade de entrega."
      />

      <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0, maxWidth: 1040 }}>
        {companies.map((company) => (
          <Box
            key={company.name}
            component="li"
            sx={{
              position: 'relative',
              pl: { xs: 4, sm: 5 },
              pb: 2.5,
              '::before': {
                content: '""',
                position: 'absolute',
                top: 33,
                bottom: -33,
                left: 9,
                width: '1px',
                bgcolor: 'divider',
              },
              ':last-of-type': { pb: 0, '::before': { display: 'none' } },
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: 'absolute',
                left: 0,
                top: 24,
                width: 19,
                height: 19,
                borderRadius: '50%',
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'text.primary' }} />
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 0.9fr) minmax(0, 1.1fr)' },
                gap: { xs: 1.5, md: 4 },
                alignItems: 'start',
                p: { xs: 2, sm: 3 },
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '12px',
                bgcolor: 'background.paper',
              }}
            >
              <Stack spacing={1} sx={{ minWidth: 0 }}>
                <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '1.125rem', md: '1.375rem' } }}>
                  {company.name}
                </Typography>
                <Typography variant="overline" component="span" color="text.secondary">
                  {company.sector}
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ minWidth: 0 }}>
                {company.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3, maxWidth: 760 }}>
        {companiesDisclaimer}
      </Typography>
    </Section>
  )
}
