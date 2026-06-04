# DashPro - Dashboard de Vendas Profissional

Uma aplicação de dashboard de vendas moderna, construída com foco em alta conversão, design limpo e arquitetura escalável. Desenvolvida com uma abordagem **Mobile First**, garantindo uma experiência fluida em qualquer dispositivo.

##  Tecnologias e Stack

Este projeto foi construído utilizando as ferramentas mais modernas do ecossistema front-end:

* **Framework:** [Next.js 14] (App Router)
* **Linguagem:** [TypeScript] (Tipagem rigorosa e Clean Code)
* **Interface:** [React]
* **Estilização:** [Tailwind CSS] (Utilitários e design responsivo)
* **Animações:** [Framer Motion] (Transições fluidas e feedback visual)
* **Gráficos:** [Recharts] (Visualização de dados dinâmica)
* **Ícones:** [Lucide React]
* **Utilitários:** `clsx`, `tailwind-merge`, `class-variance-authority` (Gerenciamento de classes e variantes)

##  Principais Funcionalidades

* **Visão Geral de KPIs:** Cards animados com contagem progressiva e indicadores de crescimento.
* **Gráfico de Receita vs. Meta:** Visualização em área interativa com Tooltips customizados e formatação de moeda local (BRL).
* **Ranking de Produtos:** Lista dos itens mais vendidos com barras de progresso animadas.
* **Tabela de Transações:** Histórico de movimentações com rolagem horizontal em telas menores e *badges* semânticas de status.
* **Layout Responsivo:** Sidebar colapsável no mobile com *overlay* de foco e fechamento automático na navegação.

##  Estrutura do Projeto

A arquitetura foi pensada para manter a separação de responsabilidades e facilitar a manutenção:

```text
src/
├── app/               # Rotas e layouts principais do Next.js
├── components/        # Componentes visuais
│   ├── charts/        # Gráficos (Recharts)
│   ├── layout/        # Elementos estruturais (Sidebar, Header, Layout Wrapper)
│   ├── metrics/       # Cards de KPIs
│   ├── products/      # Componentes de listagem e ranking
│   ├── transactions/  # Tabelas de dados
│   └── ui/            # Elementos de interface reutilizáveis (Badges, etc.)
├── data/              # Dados mockados para simulação
├── hooks/             # Custom Hooks (ex: useCountAnimation)
├── types/             # Interfaces TypeScript (Contratos de dados)
└── utils/             # Funções utilitárias (Formatação, união de classes CSS)