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

      <Box
        component="ol"
        sx={{
          listStyle: 'none',
          p: 0,
          m: 0,
          maxWidth: 760,
          position: 'relative',
          '::before': {
            content: '" "',
            position: 'absolute',
            top: 10,
            bottom: 10,
            left: 9,
            width: 1,
            bgcolor: 'divider',
          },
        }}
      >
        {companies.map((company) => (
          <Box
            key={company.name}
            component="li"
            sx={{
              position: 'relative',
              pl: 5,
              pb: { xs: 4, md: 5 },
              mb: { xs: 1, md: 2 },
              ':last-of-type': { pb: 0, mb: 0, '::after': { display: 'none' } },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: 3,
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
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 1 }}>
                <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                  {company.name}
                </Typography>
                <Typography variant="overline" component="span" color="text.secondary">
                  {company.sector}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
                {company.description}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>

      <Typography variant="body2" color="text.disabled" sx={{ mt: 4, maxWidth: 640 }}>
        {companiesDisclaimer}
      </Typography>
    </Section>
  )
}
