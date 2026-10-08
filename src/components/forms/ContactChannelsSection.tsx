import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { ComponentType } from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import { contactChannels, type ContactChannel } from '../../utils/contactChannels'
import { siteConfig } from '../../data/site'

const channelIcons: Record<ContactChannel['id'], ComponentType<SvgIconProps>> = {
  email: EmailRoundedIcon,
  whatsapp: WhatsAppIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
}

function ChannelRow({ channel }: { channel: ContactChannel }) {
  const Icon = channelIcons[channel.id]
  return (
    <Link
      href={channel.href}
      target={channel.external ? '_blank' : undefined}
      rel={channel.external ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 1.5,
        borderRadius: 2,
        color: 'text.primary',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: (t) =>
          t.transitions.create('background-color', { duration: t.transitions.duration.short }),
        '&:hover': {
          bgcolor: (t) => t.palette.action.hover,
        },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          display: 'grid',
          placeItems: 'center',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Icon aria-hidden="true" fontSize="small" />
      </Box>
      <Stack spacing={0.25} sx={{ minWidth: 0 }}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {channel.label}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ wordBreak: 'break-all', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {channel.href.replace(/^mailto:/, '')}
        </Typography>
      </Stack>
    </Link>
  )
}

export function ContactChannelsSection() {
  const channels = contactChannels(siteConfig.contacts)

  return (
    <Stack spacing={2.5}>
      <Typography
        id="titulo-instrucoes"
        variant="h2"
        component="h2"
        sx={{ fontSize: { xs: '1.75rem', md: '2rem' } }}
      >
        Canais diretos
      </Typography>
      {channels.length > 0 ? (
        <Stack spacing={1.5}>
          {channels.map((channel) => (
            <ChannelRow key={channel.id} channel={channel} />
          ))}
        </Stack>
      ) : (
        <Typography variant="body2" color="text.disabled">
          Nenhum canal configurado no momento.
        </Typography>
      )}
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
        Preferência por conversa assíncrona? Descreva o contexto no formulário ao lado e respondo
        pelo e-mail informado.
      </Typography>
    </Stack>
  )
}
