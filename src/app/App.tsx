import { HashRouter } from 'react-router-dom'
import Box from '@mui/material/Box'
import { AppThemeProvider } from '../theme/ThemeProvider'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'
import { ScrollTopFab } from '../components/layout/ScrollTopFab'
import { PageMain, ScrollRestoration, SkipLink } from '../components/layout/PageChrome'
import { AppRoutes } from './routes'

export default function App() {
  return (
    <HashRouter>
      <AppThemeProvider>
        <ScrollRestoration />
        <SkipLink />
        <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
          <SiteHeader />
          <PageMain>
            <AppRoutes />
          </PageMain>
          <SiteFooter />
        </Box>
        <ScrollTopFab />
      </AppThemeProvider>
    </HashRouter>
  )
}
