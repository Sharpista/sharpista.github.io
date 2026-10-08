import type { MouseEvent } from 'react'
import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

/** Restaura a posição de rolagem ao trocar de rota (instantâneo e sem animação). */
export function ScrollRestoration() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

/** Link acessível para pular o menu e ir direto ao conteúdo. */
export function SkipLink() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault()
    const target = document.getElementById('conteudo')
    if (target) {
      target.focus()
    }
  }

  return (
    <Button
      component="a"
      href="#conteudo"
      onClick={handleClick}
      variant="contained"
      size="small"
      sx={{
        position: 'absolute',
        top: 8,
        left: 8,
        zIndex: (t) => t.zIndex.tooltip,
        transform: 'translateY(-300%)',
        '&:focus-visible': {
          transform: 'translateY(0)',
        },
      }}
    >
      Pular para o conteúdo
    </Button>
  )
}

export function PageMain({ children }: { children: ReactNode }) {
  return (
    <Box
      component="main"
      id="conteudo"
      tabIndex={-1}
      sx={{ outline: 'none', display: 'block', flex: 1 }}
    >
      {children}
    </Box>
  )
}
