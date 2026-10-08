import { useEffect } from 'react'
import { siteConfig } from '../data/site'

export interface PageMetaInput {
  /** Título completo já finalizado (ex.: "Sobre | Alexandre Filho."). */
  title: string
  description: string
  /** Marque true apenas na página principal, cujo título já contém a marca. */
  isHome?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

/**
 * Atualiza título e descrição da aba após cada troca de rota (HashRouter).
 * O documento HTML compartilhado traz os metadados da página principal;
 * versões indexadas em robôs usarão as metatags estáticas do index.html.
 */
export function usePageMeta({ title, description, isHome = false }: PageMetaInput): void {
  const fullTitle = isHome ? title : `${title} | ${siteConfig.brand}`

  useEffect(() => {
    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
  }, [fullTitle, description])
}
