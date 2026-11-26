# Daniel Werner — Portfólio

Portfólio pessoal bilíngue (PT-BR / EN) de Daniel Werner, Engenheiro de Software Sênior. Construído com **React 18 + Vite 5** e **Tailwind CSS**.

- GitHub: [dgwerner-dev](https://github.com/dgwerner-dev)
- LinkedIn: [in/dgwerner](https://www.linkedin.com/in/dgwerner/)

## Recursos

- Alternador de idioma PT/EN (preferência salva em `localStorage`, padrão pelo idioma do navegador)
- Tema escuro com fundo 3D, animações com Framer Motion
- Busca rápida entre as páginas (`Ctrl/Cmd + K`)
- Contador de repositórios do GitHub em tempo real (SWR)
- SEO por página (título, descrição, Open Graph, JSON-LD), sitemap, robots e manifest PWA

## Como rodar

```bash
npm install
cp .env.example .env   # ajuste as variáveis
npm run dev            # desenvolvimento
npm run build          # build de produção
npm run preview        # pré-visualização do build
npm run lint
```

## Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `VITE_FORMSPREE_ID` | ID do formulário no Formspree (necessário para o envio de mensagens na página de contato) |
| `VITE_GITHUB_USERNAME` | Usuário do GitHub (padrão `dgwerner-dev`) |
| `VITE_SITE_URL` | URL pública do site (padrão `https://dgwerner.vercel.app`) |

> Ao publicar com outro domínio, atualize também a URL em `index.html`, `public/sitemap.xml` e `public/robots.txt`.

## Estrutura

```
src/
├── assets/            # foto de perfil e currículo (PDF)
├── components/        # Navbar, Footer, SearchDialog, Background3D...
├── config/contact.js  # contatos, GitHub, URL do site
├── i18n/              # LanguageContext, pt.js, en.js e dados compartilhados
├── pages/             # Home, About, Experience, Education, Skills, Projects, Certificates, Contact
└── hooks/useSEO.js
```

## Editando o conteúdo

Todo o texto fica em `src/i18n/pt.js` e `src/i18n/en.js` (mantenha as duas chaves sincronizadas). Tags de tecnologias das experiências e dos projetos ficam em `src/i18n/shared.js`.
