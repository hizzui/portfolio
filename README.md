# dev.natanD1 - Neo Brutalist Portfolio

Um portfólio web interativo e responsivo com estilo neo-brutalista, inspirado em design brutalista, com janelas arrastáveis e suporte bilíngue (PT-BR/EN).

## 🎨 Características

- **Design Neo-Brutalista**: Estilo visual audacioso com tipografia grande, cores vibrantes (amarelo #FFEB3B e preto)
- **Janelas Interativas Draggáveis**: Interface estilo desktop com janelas que podem ser arrastadas, minimizadas e maximizadas
- **Suporte Bilíngue**: Alternância completa entre Português (PT-BR) e Inglês (EN)
- **Carrossel Infinito de Skills**: Footer com animação contínua das tecnologias
- **Componentes Reutilizáveis**: Arquitetura modular em React com TypeScript
- **Totalmente Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **Animações Suaves**: GSAP-ready para animações avançadas

## 🛠️ Stack Tecnológico

- **React 19+** - Framework UI
- **TypeScript 5.8+** - Type safety
- **Vite 6+** - Build tool ultrarrápido
- **Tailwind CSS 3+** - Utility-first styling
- **Lucide React** - Icon library
- **GSAP 3.12+** - Animações avançadas

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React reutilizáveis
│   ├── layout/          # Layout components (Header, Footer, Hero)
│   ├── ui/              # UI components (WindowFrame)
│   └── content/         # Conteúdo das janelas (About, Work, Stack, Contact)
├── screens/             # Telas/páginas (HomeScreen)
├── hooks/               # Custom React hooks (useWindowManager, useLanguage)
├── types/               # TypeScript types
├── constants/           # Constantes (TRANSLATIONS)
├── styles/              # Global styles
├── App.tsx              # Componente raiz
└── index.tsx            # Entry point
```

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 🎯 Funcionalidades Principais

### Janelas Arrastáveis

- Clique e arraste as janelas pela barra de título
- Minimize/maximize com os botões de controle
- Z-index automático ao interagir
- Posicionamento persistente durante a sessão

### Bilingual Support

- PT-BR e ENG com um clique
- Todos os textos são traduzidos dinamicamente
- Preferências mantidas durante a sessão

### Carrossel de Skills

- 16 tecnologias em loop infinito
- Pausa ao fazer hover
- Cores alternadas (5 cores diferentes)
- Escala ao passar o mouse

## 🌐 Estados das Janelas

Cada janela (`about`, `work`, `stack`, `contact`) suporta:

- **Aberta/Fechada** - Toggle via botões do menu
- **Minimizada** - Desaparece da tela (botão amarelo)
- **Maximizada** - Expande para tela cheia (botão verde)
- **Arrastável** - Posição livre pela tela

## 🎨 Paleta de Cores

| Elemento | Cor | Hex |
|----------|-----|-----|
| Background | Amarelo Vibrante | #FFEB3B |
| Texto Principal | Preto | #000000 |
| Window About | Pink | #FF1493 |
| Window Projects | Blue | #0066FF |
| Window Stack | Purple | #9933FF |
| Window Contact | Orange | #FF8800 |
| Button Close | Red | #FF3333 |
| Button Minimize | Yellow | #FFD700 |
| Button Maximize | Green | #33CC33 |

## 📱 Responsividade

- **Desktop (≥768px)**: Layout completo com todas as janelas
- **Mobile/Tablet (<768px)**: Janelas maximizadas adaptadas

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz (opcional):

```
VITE_APP_TITLE=dev.natanD1
```

### Customização

- **Cores**: Edite `tailwind.config.ts`
- **Traduções**: Atualize `src/constants/index.ts`
- **Conteúdo**: Modifique `src/components/content/`
- **Animações**: Adicione GSAP em `src/components/ui/WindowFrame.tsx`

## 📄 Licença

MIT © 2026 Natan Dourado

---

Desenvolvido com ❤️ por [Natan Dourado](https://github.com/natanD1)
