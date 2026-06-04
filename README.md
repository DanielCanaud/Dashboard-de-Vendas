# Dashboard de Vendas

Dashboard moderno para análise de vendas construído com **Next.js, React, TypeScript, Tailwind CSS e Recharts**, focado em visualização de métricas, performance e experiência do usuário.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)

---

## Funcionalidades Principais

- **Dashboard Overview** — Visão geral dos principais indicadores de negócio
- **KPIs em tempo real** — Receita, pedidos, clientes e conversão
- **Gráfico de Vendas** — Comparação visual de desempenho e evolução das vendas
- **Top Produtos** — Ranking dos produtos com melhor performance
- **Histórico de Transações** — Tabela organizada com status e detalhes das vendas
- **Animações Suaves** — Contadores animados utilizando Framer Motion
- **Design Responsivo** — Experiência otimizada para desktop, tablet e mobile
- **Arquitetura Escalável** — Separação entre componentes, dados, tipos e utilitários

---

# Como Rodar

## Pré-requisitos

- Node.js 20.0 ou superior
- NPM ou Yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/DanielCanaud/Dashboard-de-Vendas

cd dashboard-vendas

# Instale as dependências
npm install

# ou

yarn install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# ou

yarn dev
```

Acesse:

```text
http://localhost:3000
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Iniciar servidor de produção
npm run start
```

### Linting

```bash
# Verificar qualidade do código
npm run lint
```

---

## Estrutura do Projeto

```text
dashboard-vendas/
├── src/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── charts/
│   │   └── SalesChart.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MainLayout.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── metrics/
│   │   └── MetricCard.tsx
│   │
│   ├── products/
│   │   └── TopProducts.tsx
│   │
│   ├── transactions/
│   │   └── TransactionsTable.tsx
│   │
│   └── ui/
│       └── Badge.tsx
│
├── data/
│   ├── metrics.ts
│   ├── products.ts
│   ├── salesChart.ts
│   └── transactions.ts
│
├── hooks/
│   └── useCountAnimation.ts
│
├── types/
│   ├── metrics.ts
│   ├── product.ts
│   ├── sales.ts
│   └── transaction.ts
│
├── utils/
│   ├── cn.ts
│   └── formatting.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## Stack

- **Next.js 16.2.7** — Framework React com renderização otimizada
- **React 19.2.4** — Biblioteca para construção da interface
- **TypeScript** — Tipagem estática para maior segurança
- * **CSS3** — Estilização moderna e responsiva
- **Recharts** — Biblioteca para gráficos interativos
- **Framer Motion** — Animações fluidas e performáticas
- **Lucide React** — Ícones modernos e leves

### Dependências Principais

```json
{
  "next": "16.2.7",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "recharts": "^3.8.1",
  "framer-motion": "^12.40.0",
  "lucide-react": "^1.17.0",
  "clsx": "^2.1.1",
  "class-variance-authority": "^0.7.1",
  "tailwind-merge": "^3.6.0"
}
```

---

## Componentes Principais

### Layout

- Sidebar responsiva
- Header com navegação
- Estrutura organizada para expansão futura

### Métricas

- Cards de indicadores
- Valores formatados
- Contadores animados
- Destaques visuais para crescimento e desempenho

### Visualização de Dados

- Gráfico de vendas utilizando Recharts
- Comparação de métricas ao longo do tempo
- Interface limpa e intuitiva

### Produtos

- Ranking dos produtos mais vendidos
- Indicadores de desempenho
- Visualização rápida de resultados

### Transações

- Tabela responsiva
- Status das vendas
- Informações detalhadas de cada transação

---

## Otimizações

### Performance

- Renderização otimizada com Next.js
- Componentização reutilizável
- Code Splitting automático
- Hooks customizados para melhor organização

### Experiência do Usuário

- Animações suaves com Framer Motion
- Interface responsiva
- Navegação intuitiva
- Feedback visual para ações e métricas

### Escalabilidade

- Estrutura modular
- Tipagem centralizada
- Dados desacoplados da interface
- Fácil integração com APIs reais

---

## Autor

Daniel Canaud

GitHub: https://github.com/DanielCanaud
