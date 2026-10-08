import type { ReactNode } from 'react'
import type { SxProps, Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface SectionProps {
  component?: 'section' | 'div' | 'header' | 'footer' | 'article'
  id?: string
  ariaLabelledBy?: string
  sx?: SxProps<Theme>
  bordered?: boolean
  children: ReactNode
}

export function Section({
  component = 'section',
  id,
  ariaLabelledBy,
  sx,
  bordered = false,
  children,
}: SectionProps) {
  return (
    <Box
      component={component}
      id={id}
      aria-labelledby={ariaLabelledBy}
      sx={[
        {
          borderTop: bordered ? '1px solid' : undefined,
          borderColor: 'divider',
          color: (t) => t.palette.text.primary,
          py: { xs: 7, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2.5, md: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  titleVariant?: 'h2' | 'h3'
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  titleVariant = 'h2',
  id,
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Stack
      component="header"
      id={id}
      spacing={1.5}
      sx={{
        alignItems: centered ? 'center' : 'flex-start',
        textAlign: centered ? 'center' : 'left',
        mb: { xs: 4, md: 6 },
      }}
    >
      {eyebrow && (
        <Typography variant="overline" component="p" color="text.secondary">
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant={titleVariant}
        component={titleVariant === 'h2' ? 'h2' : 'h3'}
        sx={{ maxWidth: 760 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          {subtitle}
        </Typography>
      )}
    </Stack>
  )
}
