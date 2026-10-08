import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { Section } from '../../ui/Section'

export function HomeHero() {
  return (
    <Section sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 10, md: 16 } }}>
      <Stack spacing={3.5} sx={{ maxWidth: 900 }}>
        <Typography variant="overline" component="p" color="text.secondary">
          Software Engineering &amp; Consulting
        </Typography>

        <Typography variant="h1" component="h1">
          Engenharia de software para negócios que querem evoluir.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680 }}>
          Ajudo empresas a desenvolver, modernizar e escalar soluções digitais utilizando arquitetura
          sólida, tecnologias modernas e boas práticas de engenharia.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button
            component={RouterLink}
            to="/contato"
            variant="contained"
            color="primary"
            size="large"
          >
            Solicitar consultoria
          </Button>
          <Button
            component={RouterLink}
            to="/servicos"
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              borderColor: 'divider',
              color: 'text.primary',
              '&:hover': { borderColor: 'text.primary', bgcolor: 'transparent' },
            }}
          >
            Explorar serviços
          </Button>
        </Stack>

        <Typography variant="overline" component="p" color="text.disabled" sx={{ pt: 1 }}>
          Desenvolvimento · Arquitetura · Cloud · Modernização
        </Typography>
      </Stack>
    </Section>
  )
}
