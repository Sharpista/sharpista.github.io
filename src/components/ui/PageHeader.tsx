import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Section } from './Section'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <Section sx={{ pt: { xs: 6, md: 9 } }}>
      <Stack spacing={2.5} sx={{ maxWidth: 820 }}>
        <Typography variant="overline" component="p" color="text.secondary">
          {eyebrow}
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: { xs: '2.4rem', md: '3.5rem', lg: '4rem' } }}
        >
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          {description}
        </Typography>
      </Stack>
    </Section>
  )
}
