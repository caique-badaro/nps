# NPS Dashboard

### Dashboard web para análise e acompanhamento da satisfação dos clientes por meio de indicadores, métricas e visualizações interativas

🔗 **[Acessar projeto](https://caique-badaro.github.io/nps/)**

---

## Sobre o projeto

O **NPS Dashboard** é uma aplicação web desenvolvida em React para visualização e análise de indicadores relacionados à satisfação dos clientes.

O projeto foi desenvolvido como parte da evolução nos estudos de desenvolvimento Front-end, com foco na construção de interfaces orientadas a dados e na utilização de bibliotecas modernas para criação de dashboards.

A aplicação busca transformar dados de satisfação em informações visuais de fácil interpretação, utilizando indicadores, gráficos e componentes de interface para facilitar a análise.

### Objetivos do projeto

* [x] Construir uma aplicação utilizando React
* [x] Criar uma interface de dashboard
* [x] Trabalhar com visualização de dados
* [x] Utilizar componentes reutilizáveis
* [x] Organizar a aplicação em uma arquitetura baseada em componentes
* [x] Praticar gerenciamento de estado e renderização dinâmica
* [x] Trabalhar com navegação entre páginas
* [x] Desenvolver e publicar uma aplicação utilizando Vite

---

## Arquitetura e conceitos aplicados

O projeto explora conceitos fundamentais do desenvolvimento moderno de aplicações React, incluindo:

* Componentização de interfaces
* Props e composição de componentes
* Hooks do React
* Gerenciamento de estado
* Renderização dinâmica
* Roteamento de páginas
* Visualização de dados
* Organização modular do código
* Responsividade
* Linting e padronização de código

### Fluxo simplificado

```text
Dados
  ↓
Tratamento
  ↓
Estado da aplicação
  ↓
Componentes React
  ↓
Indicadores + Gráficos
  ↓
Dashboard interativo
```

---

## Stack utilizada

### Front-end

* **React**
* **JavaScript**
* **React Router**
* **Vite**

### Interface

* **PrimeReact**
* **PrimeIcons**
* **CSS**

### Visualização de dados

* **Chart.js**
* **chartjs-plugin-datalabels**

### Qualidade e desenvolvimento

* **ESLint**
* **Prettier**
* **Vite Plugin SVGR**

---

## Principais recursos

O dashboard foi estruturado para apresentar informações de NPS de maneira visual e organizada, utilizando diferentes elementos de interface e visualização de dados.

Entre os recursos trabalhados estão:

* Indicadores de desempenho
* Gráficos para análise dos dados
* Visualização de métricas
* Componentes de interface reutilizáveis
* Navegação entre diferentes áreas da aplicação
* Interface responsiva
* Representação visual de informações quantitativas

---

## Aprendizados técnicos

Durante o desenvolvimento foram praticados conceitos importantes para a construção de aplicações React:

* Estruturação de projetos com **Vite**
* Criação e reutilização de componentes React
* Utilização de **Hooks**
* Gerenciamento de estados
* Organização de componentes e arquivos
* Implementação de rotas
* Integração de bibliotecas externas
* Construção de gráficos com **Chart.js**
* Utilização de componentes com **PrimeReact**
* Configuração de ferramentas de qualidade de código
* Processo de build e publicação de uma aplicação React

Este projeto representa uma evolução dos estudos de JavaScript para a construção de aplicações de interface utilizando **React e ferramentas modernas do ecossistema Front-end**.

---

## Estrutura do projeto

```text
nps/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── pages/
│   └── ...
├── .github/
│   └── workflows/
├── index.html
├── eslint.config.js
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> A estrutura pode evoluir conforme novas funcionalidades e componentes forem adicionados ao projeto.

---

## Como executar o projeto

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/)
* npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/caique-badaro/nps.git
```

Entre na pasta do projeto:

```bash
cd nps
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite no terminal.

---

## Scripts disponíveis

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento com Vite.

### Build

```bash
npm run build
```

Gera a versão otimizada da aplicação para produção.

### Preview

```bash
npm run preview
```

Executa localmente uma prévia da versão de produção.

### Lint

```bash
npm run lint
```

Executa a análise estática do código utilizando ESLint.

---

## Próximas melhorias

Possíveis evoluções para o projeto:

* [ ] Integração com uma API ou fonte de dados real
* [ ] Filtros avançados para análise dos indicadores
* [ ] Seleção de diferentes períodos
* [ ] Exportação de dados
* [ ] Melhorias de acessibilidade
* [ ] Testes automatizados
* [ ] Expansão dos indicadores disponíveis
* [ ] Persistência de dados
* [ ] Evolução da arquitetura para uma aplicação mais escalável

---

## Autor

**Caique Badaró**

Sou um profissional de produtos digitais com experiência em UX/UI em formação em Desenvolvimento de Sistemas. 

💼 **LinkedIn:** [linkedin.com/in/caique-badaro](https://www.linkedin.com/in/caique-badaro/)
🐙 **GitHub:** [github.com/caique-badaro](https://github.com/caique-badaro/)

---

⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório.
