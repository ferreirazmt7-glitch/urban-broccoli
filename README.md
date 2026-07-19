# One Fitness Academia — Site Institucional

Site institucional completo (multi-página) construído com **Next.js 14 (App
Router) + TypeScript + Tailwind CSS**, seguindo o padrão de componentes
shadcn/ui, ícones Lucide React e boas práticas de SEO, acessibilidade e
performance.

## Páginas

- `/` — Início
- `/sobre` — Sobre a academia
- `/modalidades` — Modalidades de treino
- `/planos` — Planos e preços
- `/avaliacoes` — Avaliações de alunos
- `/contato` — Formulário de contato, mapa e FAQ

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/                 Rotas (App Router)
  api/contact/        Endpoint do formulário de contato
components/          Componentes React (Header, Footer, UI, etc.)
lib/utils.ts         Dados do site (telefone, endereço, links) e helper cn()
public/images/       Imagens da academia
```

## Personalização rápida

Edite `lib/utils.ts` para trocar telefone, endereço, WhatsApp, Instagram e
horário de funcionamento — esses dados são usados em todas as páginas.

## Próximos passos sugeridos

- Conectar o formulário de contato (`app/api/contact/route.ts`) a um serviço
  de e-mail transacional (ex: Resend) ou salvar os leads em um banco
  PostgreSQL com Prisma.
- Trocar as imagens em `public/images` por fotos em alta resolução hospedadas
  no Cloudinary (basta apontar as URLs em cada página).
- Adicionar autenticação de área do aluno com Clerk ou Auth.js, e cobrança de
  planos com Stripe, se desejar evoluir para um sistema de matrícula online.
- Fazer o deploy na Vercel: basta importar o repositório e não é necessária
  nenhuma variável de ambiente para rodar a versão atual.

## Deploy na Vercel

```bash
npm i -g vercel
vercel
```

Ou importe o projeto diretamente pelo painel da [Vercel](https://vercel.com/new).
