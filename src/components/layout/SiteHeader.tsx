import { useState } from 'react'
import brandLogo from '../../assets/arx-dev.svg'
import { useLocation } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import { alpha, type SxProps, type Theme } from '@mui/material/styles'
import { navItems, siteConfig } from '../../data/site'
import { useThemeMode } from '../../theme/ThemeProvider'
import { useScrolled } from '../../hooks/useScrolled'

const HEADER_PLACEHOLDER = '76px'

export function SiteHeader() {
  const { pathname } = useLocation()
  const { mode, toggleMode } = useThemeMode()
  const scrolled = useScrolled(8)
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string): boolean =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  const themeToggle = (
    <IconButton
      onClick={toggleMode}
      color="inherit"
      aria-label={mode === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
    </IconButton>
  )

  const navButtonSx = (path: string): SxProps<Theme> =>
    ({
      textTransform: 'none',
      fontWeight: isActive(path) ? 600 : 400,
      color: isActive(path) ? 'text.primary' : 'text.secondary',
      minWidth: 0,
      px: 1.5,
      borderBottom: 2,
      borderRadius: 0,
      borderColor: isActive(path) ? 'primary.main' : 'transparent',
      py: 2.2,
      '&:hover': {
        color: 'text.primary',
        borderColor: (t) => alpha(t.palette.primary.main, 0.35),
      },
    }) as const

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: (t) => t.zIndex.appBar,
      }}
    >
      <Box
        sx={{
          bgcolor: 'transparent',
          borderBottom: '1px solid',
          borderColor: 'transparent',
          transition: (t) =>
            t.transitions.create(['background-color', 'border-color'], {
              duration: t.transitions.duration.short,
            }),
          ...(scrolled && {
            bgcolor: (t) => alpha(t.palette.background.default, 0.88),
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderColor: 'divider',
          }),
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 1200,
            mx: 'auto',
            px: { xs: 2.5, md: 4 },
            height: HEADER_PLACEHOLDER,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            aria-label={`${siteConfig.brand} — página inicial`}
            sx={{ display: 'inline-flex', flexShrink: 0 }}
          >
            <Box
              component="img"
              src={brandLogo}
              alt={siteConfig.brand}
              width={480}
              height={120}
              sx={{ display: 'block', width: { xs: 160, sm: 208, md: 224 }, height: 'auto' }}
            />
          </Box>

          <Stack
            direction="row"
            component="nav"
            aria-label="Navegação principal"
            spacing={0.5}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color="inherit"
                sx={navButtonSx(item.path)}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              component={RouterLink}
              to="/contato"
              variant="contained"
              color="primary"
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              Vamos conversar
            </Button>
            {themeToggle}
            <IconButton
              onClick={() => setMenuOpen(true)}
              color="inherit"
              aria-label="Abrir menu de navegação"
              aria-expanded={menuOpen}
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{
          paper: { sx: { width: 300, pt: 1.5 }, role: 'presentation' },
        }}
      >
        <Box sx={{ px: 2, pb: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={() => setMenuOpen(false)}
            color="inherit"
            aria-label="Fechar menu de navegação"
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={RouterLink}
              to={item.path}
              selected={isActive(item.path)}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive(item.path) ? 600 : 400,
                }}
              />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 2, pt: 1, pb: 2 }}>
          <Button
            component={RouterLink}
            to="/contato"
            onClick={() => setMenuOpen(false)}
            variant="contained"
            color="primary"
            fullWidth
          >
            Vamos conversar
          </Button>
        </Box>
      </Drawer>
    </Box>
  )
}
