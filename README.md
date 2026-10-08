# Alexandre Filho. — Software Engineering & Consulting

Website institucional de consultoria independente em engenharia de software.
Construído em **React + TypeScript (strict) + Vite + Material UI**, publicado
automaticamente no **GitHub Pages** via **GitHub Actions**.

- URL publicada: <https://sharpista.github.io/>
- Navegação por HashRouter (funciona em qualquer rota direta do Pages)

## Páginas

| Página | URL pública |
| --- | --- |
| Início | `https://sharpista.github.io/#/` |
| Sobre & Experiência | `https://sharpista.github.io/#/sobre` |
| Serviços | `https://sharpista.github.io/#/servicos` |
| Contato | `https://sharpista.github.io/#/contato` |

> Observação de SEO: com HashRouter, todas as rotas renderizam a partir do mesmo
> `index.html`. Os metadados estáticos (`index.html`, `sitemap.xml`, `robots.txt`)
> otimizam a página principal; as rotas internas atualizam `title` e `description`
> no navegador após a troca de rota.

## Requisitos de ambiente

- Node.js **>= 20.19** (LTS recomendado: 22)
- npm **>= 10**
- Git

## Instalação

```bash
npm install
```

## Execução local (desenvolvimento)

```bash
npm run dev
```

Acesse `http://localhost:5173/`.

## Verificação e build de produção

```bash
npm run typecheck   # TypeScript strict (tsc --noEmit)
npm run lint        # ESLint (flat config)
npm run build       # typecheck + vite build → pasta dist/
npm run preview     # serve o build local para conferência
```

## Configuração dos contatos

Nenhum dado pessoal é inventado no código. Os canais exibidos são opcionais e
configuráveis criando um arquivo `.env.local` (veja `.env.example`):

```bash
VITE_CONTACT_EMAIL=     # e-mail profissional (exibido como mailto:)
VITE_WHATSAPP_NUMBER=   # número com DDI+DDD, ex.: 5511999999999
VITE_LINKEDIN_URL=      # URL do perfil profissional
VITE_GITHUB_URL=        # fallback padrão: https://github.com/Sharpista
```

Os canais que ficarem vazios simplesmente não são exibidos.

## Configuração do formulário (Formspree)

O GitHub Pages é estático; o envio usa um serviço externo de formulários
(Formspree). Crie um formulário em <https://formspree.io> e configure:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/seu-id
```

Comportamentos garantidos:

- Com endpoint configurado: envio real via `fetch` (JSON), com estados de
  envio, sucesso e erro.
- Sem endpoint configurado: o formulário **não é exibido** e é mostrada uma
  alternativa funcional de contato (e-mail/WhatsApp configurados). O envio
  **nunca é simulado**.
- Variáveis `VITE_` são embutidas no bundle público — não guarde segredos nelas.

## Publicação no GitHub Pages

1. Crie o repositório `Sharpista.github.io` (conta **Sharpista**) e faça push
   para a branch `main`:

   ```bash
   git init
   git add .
   git commit -m "feat: website institucional inicial"
   git branch -M main
   git remote add origin https://github.com/Sharpista/Sharpista.github.io.git
   git push -u origin main
   ```

2. No GitHub, em **Settings → Pages → Build and deployment**, selecione
   **Source: GitHub Actions**. O workflow `.github/workflows/deploy.yml`
   executará automaticamente: checkout → Node 22 → `npm ci` → typecheck →
   lint → build → publicação em Pages (jobs `build` e `deploy`, com as
   permissões mínimas `contents: read`, `pages: write`, `id-token: write`).

3. O workflow também pode ser disparado manualmente pela aba
   **Actions → Deploy site to GitHub Pages → Run workflow** (`workflow_dispatch`).

### Implantação em outro repositório

O `vite.config.ts` calcula o `base` automaticamente pelo `GITHUB_REPOSITORY`
da CI: para um repositório diferente de `*.github.io`, o base passa a ser
`/<nome-do-repo>/`. É possível forçar outro caminho via variável `BASE_PATH`.
Nesse caso, ajuste também `siteConfig.url` (`src/data/site.ts`), `robots.txt`
e `sitemap.xml`.

## Domínio personalizado (futuro)

1. Em **Settings → Pages → Custom domain**, cadastre o domínio (o GitHub cria
   o arquivo `CNAME`; adicione-o à raiz de `public/` para não se perder entre builds).
2. Aponte os registros DNS conforme a documentação do Pages.
3. Atualize `siteConfig.url`, `index.html` (canonical/OG), `robots.txt` e
   `sitemap.xml` para o novo domínio.

## Estrutura do projeto

```
src/
├── app/            # App (HashRouter) e rotas
├── components/
│   ├── layout/     # Header, Footer, FAB "voltar ao topo", chrome de página
│   ├── ui/         # Primitivas (Section, PageHeader, CTA, links)
│   ├── sections/   # Seções de página (hero, serviços, trajetória, CTA final)
│   └── forms/      # Formulário de contato e canais
├── pages/          # Home, About, Services, Contact
├── theme/          # Design system (tokens MD3 monocromático) e provider
├── data/           # Conteúdo desacoplado dos componentes (empresas, serviços…)
├── hooks/          # usePageMeta, useScrolled
├── utils/          # Helpers (canais de contato)
└── styles/         # CSS global complementar
```

## Design system

- Modo claro padrão, modo escuro alternável (preferência persistida em
  `localStorage`, chave `af-theme-mode`).
- Tokens monocromáticos MD3 (preto sobre branco / branco sobre preto),
  tipografia **Inter Variable**, cantos de 8–16 px, cards com bordas finas,
  sem sombras fortes, sem gradientes ou efeitos neon.
- Acessibilidade: HTML semântico, skip link, navegação por teclado, foco
  visível, `aria-*` nos controles e respeito a `prefers-reduced-motion`.

## Decisões técnicas relevantes

- **Validação do formulário**: React Hook Form com regras nativas (sem Zod),
  reduzindo dependências e riscos de compatibilidade.
- **Sem `Grid` do MUI**: layouts com `Box`/`Stack`/CSS Grid para evitar
  acoplamento a APIs de grid em constante mudança.
- **Ícones**: `@mui/icons-material` (Material Icons) — sem dependência de
  fonte externa de símbolos.

## Limitações conhecidas

- Rotas hash não geram documentos HTML real por URL (conforme explicado).
- Testes automatizados de UI não foram incluídos; as validações cobrem
  typecheck, lint e build. O comportamento em runtime deverá ser conferido
  manualmente (navegação, tema claro/escuro, responsividade).
