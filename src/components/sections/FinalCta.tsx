import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { Section } from '../ui/Section'

interface FinalCtaProps {
  title?: string
  description?: string
  buttonLabel?: string
  headingId?: string
}

export function FinalCta({
  title = 'Seu próximo desafio merece uma base tecnológica sólida.',
  description = 'Vamos conversar sobre como a engenharia de software pode apoiar a evolução do seu negócio.',
  buttonLabel = 'Iniciar uma conversa',
  headingId = 'cta-final',
}: FinalCtaProps) {
  return (
    <Section ariaLabelledBy={headingId}>
      <Stack
        spacing={3}
        sx={{
          alignItems: 'flex-start',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 4,
          p: { xs: 3.5, md: 6 },
          maxWidth: 860,
          mx: 'auto',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          id={headingId}
          sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, maxWidth: 660 }}
        >
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
          {description}
        </Typography>
        <Button component={RouterLink} to="/contato" variant="contained" color="primary" size="large">
          {buttonLabel}
        </Button>
      </Stack>
    </Section>
  )
}
