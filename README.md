# dev.ryan - Neo Brutalist Portfolio

Um portfólio web interativo com estilo neo-brutalista, janelas arrastáveis e suporte bilíngue (PT-BR/EN).

## 🎨 Características

- **Design Neo-Brutalista**: Tipografia grande, cores vibrantes e estilo audacioso
- **Janelas Draggáveis**: Interface estilo desktop com janelas interativas
- **Suporte Bilíngue**: PT-BR e ENG com alternância dinâmica
- **Carrossel de Skills**: Footer com animação infinita de tecnologias
- **Componentes em React + TypeScript**: Arquitetura modular e type-safe
- **Totalmente Responsivo**: Mobile, tablet e desktop

## 🛠️ Stack

- React 19 | TypeScript 5.8 | Vite 6 | Tailwind CSS 3 | Lucide React | GSAP 3.12

## 📁 Estrutura

```
src/
├── components/ (layout, ui, content)
├── screens/ (HomeScreen)
├── hooks/ (useWindowManager, useLanguage)
├── types/ e constants/
└── styles/
```

## 🚀 Como Usar

```bash
npm install
npm run dev      # Desenvolvimento (localhost:3000)
npm run build    # Build para produção
npm run preview  # Preview da build
```

## 🎯 Funcionalidades

- **Janelas Arrastáveis**: Clique e arraste pela barra de título
- **Minimize/Maximize**: Botões de controle para cada janela
- **Bilingual**: Troca dinâmica entre PT-BR e ENG
- **Skills Carousel**: 16 tecnologias em loop infinito com cores alternadas

## 🎨 Design System

- **Background**: Laranja pastel com diagonal stripes (#FFB380 + #FFAA66)
- **Headers de Janelas**: Laranja (#FF9500)
- **Botões**: Estilo 3D com shadows
- **Texto Hero**: Laranja igual ao fundo com stroke preto

## 🔧 Customização

- **Cores**: `tailwind.config.ts`
- **Traduções**: `src/constants/index.ts`
- **Conteúdo**: `src/components/content/`

## 📄 Licença

MIT © 2026

---

Dev.ryan - Back-End Developer & CS Student 🚀
