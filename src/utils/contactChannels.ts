export interface ContactChannel {
  readonly id: 'email' | 'whatsapp' | 'linkedin' | 'github'
  readonly label: string
  readonly href: string
  readonly external: boolean
}

function whatsappHref(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  return `https://wa.me/${digits}`
}

function isEmail(value: string): boolean {
  return value.includes('@')
}

/**
 * Constrói os canais de contato a partir da configuração.
 * Canais sem valor configurado não são retornados.
 */
export function contactChannels(contacts: {
  email: string
  whatsapp: string
  linkedin: string
  github: string
}): ReadonlyArray<ContactChannel> {
  const channels: ContactChannel[] = []

  if (contacts.email) {
    const href = isEmail(contacts.email) ? `mailto:${contacts.email}` : contacts.email
    channels.push({ id: 'email', label: 'E-mail', href, external: false })
  }
  if (contacts.whatsapp) {
    channels.push({
      id: 'whatsapp',
      label: 'WhatsApp',
      href: whatsappHref(contacts.whatsapp),
      external: true,
    })
  }
  if (contacts.linkedin) {
    channels.push({ id: 'linkedin', label: 'LinkedIn', href: contacts.linkedin, external: true })
  }
  if (contacts.github) {
    channels.push({ id: 'github', label: 'GitHub', href: contacts.github, external: true })
  }

  return channels
}
