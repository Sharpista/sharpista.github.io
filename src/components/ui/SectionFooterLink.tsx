import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

interface SectionFooterLinkProps {
  to: string
  label: string
  /** id do heading que introduz a seção ( associa o CTA ao seu contexto ). */
  headingId?: string
}

export function SectionFooterLink({ to, label, headingId }: SectionFooterLinkProps) {
  return (
    <Link
      component={RouterLink}
      to={to}
      variant="body1"
      aria-describedby={headingId}
      sx={{
        color: (t) => t.palette.text.primary,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        alignSelf: 'flex-start',
      }}
    >
      {label}
      <ArrowForwardRoundedIcon fontSize="small" />
    </Link>
  )
}
