import brandLogo from '../../assets/arx-dev.svg'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { navItems, siteConfig } from '../../data/site'
import { contactChannels } from '../../utils/contactChannels'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const channels = contactChannels(siteConfig.contacts)

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.default',
        mt: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2.5, md: 4 },
          py: { xs: 5, md: 7 },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1fr' },
          }}
        >
          <Stack spacing={1.5}>
            <Box
              component="img"
              src={brandLogo}
              alt={siteConfig.brand}
              width={480}
              height={120}
              sx={{ display: 'block', width: 280, maxWidth: '100%', height: 'auto' }}
            />
            <Typography variant="overline" component="p" color="text.secondary" sx={{ mb: 0.5 }}>
              {siteConfig.tagline}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
              Consultoria independente de engenharia de software — desenvolvimento, arquitetura,
              modernização e cloud para empresas que precisam evoluir suas soluções.
            </Typography>
          </Stack>

          <Stack spacing={1} component="nav" aria-label="Navegação do rodapé">
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Navegação
            </Typography>
            {navItems.map((item) => (
              <Link
                key={item.path}
                component={RouterLink}
                to={item.path}
                color="text.secondary"
                variant="body2"
                sx={{ alignSelf: 'flex-start' }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <Stack spacing={1}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Canais
            </Typography>
            {channels.length === 0 && (
              <Typography variant="body2" color="text.disabled">
                Nenhum canal configurado no momento.
              </Typography>
            )}
            {channels.map((channel) => (
              <Link
                key={channel.id}
                href={channel.href}
                color="text.secondary"
                variant="body2"
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                sx={{ alignSelf: 'flex-start' }}
              >
                {channel.label}
              </Link>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ mt: { xs: 5, md: 6 }, mb: 3 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={1}
        >
          <Typography variant="body2" color="text.secondary">
            © {year} {siteConfig.brand} Todos os direitos reservados.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {siteConfig.tagline}
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}
