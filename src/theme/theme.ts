import { alpha, createTheme, type Theme } from '@mui/material/styles'

export type ThemeMode = 'light' | 'dark'

/**
 * Tokens de cor do design system (Material Design 3 adaptado para uma
 * identidade visual monocromática, editorial e minimalista).
 */
export interface ColorTokens {
  primary: string
  onPrimary: string
  background: string
  surface: string
  surfaceVariant: string
  onSurface: string
  textSecondary: string
  outline: string
}

export const lightTokens: ColorTokens = {
  primary: '#111111',
  onPrimary: '#FFFFFF',
  background: '#FFFFFF',
  surface: '#FAFAFA',
  surfaceVariant: '#F5F5F5',
  onSurface: '#171717',
  textSecondary: '#616161',
  outline: '#E5E5E5',
}

export const darkTokens: ColorTokens = {
  primary: '#FFFFFF',
  onPrimary: '#111111',
  background: '#121212',
  surface: '#1C1C1C',
  surfaceVariant: '#252525',
  onSurface: '#FFFFFF',
  textSecondary: '#B3B3B3',
  outline: '#353535',
}

export function colorTokensFor(mode: ThemeMode): ColorTokens {
  return mode === 'dark' ? darkTokens : lightTokens
}

const buttonBasics = {
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 12,
  paddingInline: '20px',
  paddingBlock: '10px',
} as const

export function createAppTheme(mode: ThemeMode): Theme {
  const t = colorTokensFor(mode)

  return createTheme({
    palette: {
      mode,
      primary: {
        main: t.primary,
        contrastText: t.onPrimary,
        dark: mode === 'dark' ? '#E8E8E8' : '#000000',
      },
      background: {
        default: t.background,
        paper: t.background,
      },
      text: {
        primary: t.onSurface,
        secondary: t.textSecondary,
      },
      divider: t.outline,
      action: {
        hover: alpha(t.onSurface, 0.04),
        selected: alpha(t.onSurface, 0.08),
        focus: alpha(t.onSurface, 0.12),
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: "'Inter Variable', Roboto, Arial, sans-serif",
      h1: {
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 600,
        lineHeight: 1.08,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontSize: 'clamp(2rem, 3.6vw, 3rem)',
        fontWeight: 600,
        lineHeight: 1.16,
        letterSpacing: '-0.02em',
      },
      h3: {
        fontSize: 'clamp(1.35rem, 2vw, 1.875rem)',
        fontWeight: 600,
        lineHeight: 1.28,
        letterSpacing: '-0.01em',
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.35,
        letterSpacing: '-0.01em',
      },
      body1: {
        fontSize: '1.0625rem',
        lineHeight: 1.75,
      },
      body2: {
        fontSize: '0.9375rem',
        lineHeight: 1.65,
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.18em',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@media (prefers-reduced-motion: no-preference)': {
            html: {
              scrollBehavior: 'smooth',
            },
          },
          '@media (prefers-reduced-motion: reduce)': {
            '*': {
              scrollBehavior: 'auto !important',
              transitionDuration: '0.01ms !important',
              animationDuration: '0.01ms !important',
              animationIterationCount: '1 !important',
            },
          },
          'a:focus-visible': {
            outline: `2px solid ${t.primary}`,
            outlineOffset: '3px',
          },
          '::selection': {
            backgroundColor: t.primary,
            color: t.onPrimary,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            '&.Mui-focusVisible': {
              outline: `2px solid ${t.primary}`,
              outlineOffset: '2px',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            ...buttonBasics,
          },
          sizeSmall: {
            paddingInline: '14px',
            paddingBlock: '6px',
          },
          sizeLarge: {
            paddingInline: '26px',
            paddingBlock: '13px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: `1px solid ${t.outline}`,
            backgroundImage: 'none',
            boxShadow: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            textUnderlineOffset: '4px',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
      },
    },
  })
}
