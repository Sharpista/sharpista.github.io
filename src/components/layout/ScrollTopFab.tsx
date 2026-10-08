import IconButton from '@mui/material/IconButton'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { useScrolled } from '../../hooks/useScrolled'

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function ScrollTopFab() {
  const visible = useScrolled(640)

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  return (
    <IconButton
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: 1200,
        width: 44,
        height: 44,
        color: 'primary.contrastText',
        bgcolor: 'primary.main',
        border: '1px solid',
        borderColor: (t) => (t.palette.mode === 'dark' ? 'rgba(0,0,0,0.35)' : 'transparent'),
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: (t) =>
          t.transitions.create(['opacity', 'transform', 'background-color'], {
            duration: t.transitions.duration.short,
          }),
        '&:hover': {
          bgcolor: (t) =>
            t.palette.mode === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.88)',
        },
      }}
    >
      <KeyboardArrowUpRoundedIcon />
    </IconButton>
  )
}
