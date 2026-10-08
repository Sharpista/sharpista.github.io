import { useState } from 'react'
import { useForm, useController } from 'react-hook-form'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { siteConfig, serviceOptions, type ServiceOption } from '../../data/site'

interface ContactFormValues {
  name: string
  email: string
  company: string
  service: ServiceOption | ''
  message: string
}

type SubmitStatus = 'idle' | 'success' | 'error'

const inputRules = {
  name: {
    required: 'Informe seu nome.',
    maxLength: { value: 120, message: 'Limite de 120 caracteres.' },
  },
  email: {
    required: 'Informe seu e-mail.',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Informe um e-mail válido.',
    },
  },
  company: {
    maxLength: { value: 120, message: 'Limite de 120 caracteres.' },
  },
  message: {
    required: 'Descreva a sua necessidade.',
    validate: (value: string) =>
      value.trim().length >= 10 || 'Descreva a sua necessidade com um pouco mais de detalhe.',
    maxLength: { value: 2000, message: 'Limite de 2.000 caracteres.' },
  },
} as const

function mailToHref(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function ContactForm() {
  const endpoint = siteConfig.formspreeEndpoint
  const email = siteConfig.contacts.email
  const whatsapp = siteConfig.contacts.whatsapp
  const github = siteConfig.contacts.github
  const linkedin = siteConfig.contacts.linkedin

  const { register, handleSubmit, reset, control, formState } = useForm<ContactFormValues>({
    defaultValues: { name: '', email: '', company: '', service: '', message: '' },
    mode: 'onSubmit',
  })
  const { errors, isSubmitting } = formState
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const {
    field: serviceField,
  } = useController<ContactFormValues>({ control, name: 'service' })

  // Sem endpoint configurado: exibimos alternativas reais de contato.
  // Nunca simulamos um envio bem-sucedido.
  if (!endpoint) {
    const hasEmail = Boolean(email)
    const hasWhatsApp = Boolean(whatsapp)
    const hasExtras = Boolean(github || linkedin)
    return (
      <Card variant="outlined">
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Typography variant="h3" component="h2" sx={{ mb: 1.5 }}>
            Envio da mensagem
          </Typography>
          <Alert severity="info" sx={{ mb: 2 }}>
            O formulário online ainda não está conectado. Utilize um dos canais de contato ao lado
            para enviar sua mensagem.
          </Alert>
          <Stack spacing={1.5} sx={{ alignItems: 'flex-start' }}>
            {hasEmail && (
              <Button
                component="a"
                href={mailToHref(email, 'Contato pelo site', 'Olá, Alexandre!\n\n')}
                variant="outlined"
                color="primary"
                startIcon={<EmailRoundedIcon />}
              >
                Enviar por e-mail
              </Button>
            )}
            {hasWhatsApp && (
              <Button
                component="a"
                href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="primary"
                startIcon={<WhatsAppIcon />}
              >
                Conversar no WhatsApp
              </Button>
            )}
            {hasExtras && (
              <Typography variant="body2" color="text.secondary">
                Perfis profissionais e open source estão listados ao lado.
              </Typography>
            )}
          </Stack>
        </CardContent>
      </Card>
    )
  }

  const onSubmit = handleSubmit(async (values) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          service: values.service || 'Não informado',
          message: values.message.trim(),
          __subject: `Contato pelo site — ${values.name.trim()}`,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      setStatus('success')
      reset({ name: '', email: '', company: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  })

  if (status === 'success') {
    return (
      <Card variant="outlined">
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Alert severity="success">
            Mensagem enviada com sucesso. Obrigado pelo contato — a resposta chegará pelo e-mail
            informado.
          </Alert>
          <Button onClick={() => setStatus('idle')} sx={{ mt: 2 }}>
            Enviar outra mensagem
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Typography variant="h3" component="h2" sx={{ mb: 2.5 }}>
          Envie uma mensagem
        </Typography>

        <Box component="form" noValidate onSubmit={onSubmit}>
          <Stack spacing={2.5}>
            <TextField
              id="contato-nome"
              label="Nome completo"
              required
              fullWidth
              disabled={isSubmitting}
              error={Boolean(errors.name)}
              helperText={errors.name?.message ?? ' '}
              aria-invalid={Boolean(errors.name)}
              {...register('name', inputRules.name)}
            />

            <TextField
              id="contato-email"
              type="email"
              label="E-mail"
              required
              fullWidth
              disabled={isSubmitting}
              error={Boolean(errors.email)}
              helperText={errors.email?.message ?? ' '}
              aria-invalid={Boolean(errors.email)}
              {...register('email', inputRules.email)}
            />

            <TextField
              id="contato-empresa"
              label="Empresa (opcional)"
              fullWidth
              disabled={isSubmitting}
              error={Boolean(errors.company)}
              helperText={errors.company?.message ?? ' '}
              aria-invalid={Boolean(errors.company)}
              {...register('company', inputRules.company)}
            />

            <TextField
              id="contato-tipo"
              select
              label="Tipo de serviço"
              fullWidth
              disabled={isSubmitting}
              error={Boolean(errors.service)}
              {...serviceField}
            >
              <MenuItem value="">
                <em>Selecione (opcional)</em>
              </MenuItem>
              {serviceOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="contato-mensagem"
              label="Mensagem"
              required
              fullWidth
              multiline
              minRows={5}
              disabled={isSubmitting}
              error={Boolean(errors.message)}
              helperText={errors.message?.message ?? ' '}
              aria-invalid={Boolean(errors.message)}
              {...register('message', inputRules.message)}
            />

            {status === 'error' && (
              <Alert severity="error" role="alert">
                Não foi possível enviar sua mensagem. Tente novamente ou utilize os canais de
                contato ao lado.
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <SendRoundedIcon />}
              sx={{ alignSelf: 'flex-start' }}
            >
              {isSubmitting ? 'Enviando…' : 'Enviar mensagem'}
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}
