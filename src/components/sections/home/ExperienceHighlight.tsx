import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Section, SectionHeading } from '../../ui/Section'
import { companies, companiesDisclaimer } from '../../../data/companies'

export function ExperienceHighlight() {
  return (
    <Section id="experiencia" bordered ariaLabelledBy="titulo-experiencia">
      <SectionHeading
        id="titulo-experiencia"
        eyebrow="Experiência"
        title="Experiência construída em ambientes corporativos complexos."
        subtitle="Minha trajetória reúne experiências em instituições financeiras, empresas de tecnologia e no setor público, com foco na evolução de soluções corporativas, qualidade e engenharia de software."
      />

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          mb: 3,
        }}
      >
        {companies.map((company) => (
          <Box
            key={company.name}
            component="article"
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              px: 2.5,
              py: 2,
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: 0,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {company.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {company.sector}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="body2" color="text.disabled" sx={{ mb: 4, maxWidth: 640 }}>
        {companiesDisclaimer}
      </Typography>

      <Stack sx={{ alignItems: 'flex-start' }}>
        <Button
          component={RouterLink}
          to="/sobre"
          variant="outlined"
          color="primary"
          sx={{
            borderColor: 'divider',
            color: 'text.primary',
            '&:hover': { borderColor: 'text.primary', bgcolor: 'transparent' },
          }}
        >
          Conhecer minha trajetória
        </Button>
      </Stack>
    </Section>
  )
}
