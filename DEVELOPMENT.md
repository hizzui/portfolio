# 📖 Guia de Desenvolvimento

## 🎯 Visão Geral da Arquitetura

Este projeto segue uma arquitetura modular e escalável:

```
App (Root)
└── HomeScreen (Main Container)
    ├── Header (Navigation)
    ├── HeroSection (Marketing)
    ├── WindowManager (State)
    │   └── WindowFrame x N (Draggable Windows)
    │       ├── AboutContent
    │       ├── WorkContent
    │       ├── StackContent
    │       └── ContactContent
    ├── Footer (Skills Carousel)
    └── LoadingScreen (Initial)
```

## 🔄 State Management

### useWindowManager Hook

Gerencia o estado global das janelas:

```typescript
const {
  windows,              // Array de WindowState
  openWindow,           // (type, title) => void
  closeWindow,          // (id) => void
  toggleMinimize,       // (id) => void
  toggleMaximize,       // (id) => void
  bringToFront,         // (id) => void
  updateWindowPosition, // (id, x, y) => void
} = useWindowManager();
```

### useLanguage Hook

Gerencia o idioma da aplicação:

```typescript
const { lang, setLang } = useLanguage();
// lang: 'pt' | 'en'
// setLang: (lang: 'pt' | 'en') => void
```

## 🎨 Componentes Principais

### WindowFrame

Componente reutilizável para janelas draggáveis:

```typescript
<WindowFrame
  window={windowState}
  titleOverride="Custom Title"
  onClose={(id) => {}}
  onMinimize={(id) => {}}
  onMaximize={(id) => {}}
  onFocus={(id) => {}}
  updatePosition={(id, x, y) => {}}
>
  {/* Content */}
</WindowFrame>
```

**Features:**
- ✅ Drag via mouse
- ✅ Minimize/Maximize
- ✅ Z-index management
- ✅ Close functionality
- ✅ Mobile responsive

### Header

Controla navegação e linguagem:

```typescript
<Header
  lang="pt"
  translations={TRANSLATIONS}
  onOpenWindow={(type, title) => {}}
  onChangeLanguage={(lang) => {}}
/>
```

### Footer

Carrossel infinito de skills com pausa ao hover:

```typescript
<Footer />
```

## 🌍 Adicionando Novas Janelas

1. **Adicione o tipo em `types/index.ts`:**

```typescript
export type WindowType = 'about' | 'work' | 'stack' | 'contact' | 'NEW_WINDOW';
```

2. **Adicione conteúdo em `components/content/index.tsx`:**

```typescript
export const NewWindowContent: React.FC<ContentProps> = ({ lang }) => {
  return <div>Conteúdo da nova janela</div>;
};
```

3. **Adicione tradução em `constants/index.ts`:**

```typescript
export const TRANSLATIONS = {
  pt: {
    // ... outros
    new_window: { title: '~/new.window', content: 'Novo conteúdo' }
  },
  en: {
    // ... outros
    new_window: { title: '~/new.window', content: 'New content' }
  }
};
```

4. **Use em `screens/HomeScreen.tsx`:**

```typescript
{win.type === 'new_window' && (
  <NewWindowContent lang={lang} translations={TRANSLATIONS} />
)}
```

## 🎨 Customizando Cores

### Opção 1: Tailwind Config

Edite `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#FFEB3B',
      dark: '#000000'
    }
  }
}
```

### Opção 2: CSS Variables

Adicione em `styles/global.css`:

```css
:root {
  --color-primary: #FFEB3B;
  --color-dark: #000000;
  --color-accent: #FF1493;
}
```

## 🎬 Adicionando Animações GSAP

Importe GSAP em qualquer componente:

```typescript
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

useEffect(() => {
  gsap.to(ref.current, {
    duration: 1,
    opacity: 1,
    y: 0,
    delay: 0.2,
  });
}, []);
```

## 📦 Dependências Principais

| Package | Versão | Uso |
|---------|--------|-----|
| react | ^19.2.3 | Framework |
| typescript | ~5.8.2 | Type safety |
| vite | ^6.2.0 | Build tool |
| tailwindcss | ^3.4.1 | Styling |
| lucide-react | ^0.562.0 | Icons |
| gsap | ^3.12.2 | Animations |

## 🚀 Performance Tips

1. **Use React.memo para componentes que não mudam:**
```typescript
export const WindowFrame = React.memo(WindowFrameComponent);
```

2. **Lazy load componentes grandes:**
```typescript
const ExpensiveComponent = lazy(() => import('./ExpensiveComponent'));
```

3. **Otimize re-renders com useCallback:**
```typescript
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);
```

## 🔍 Debugging

### React DevTools

```bash
npm install --save-dev @react-devtools/shell-electron
```

### Console Logging

```typescript
console.log('State:', windows);
console.log('Language:', lang);
```

### Vite HMR

Alterações são aplicadas automaticamente na tela enquanto você desenvolve!

## 📝 Convenções de Código

- **Componentes**: PascalCase (`WindowFrame.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useWindowManager.ts`)
- **Tipos**: PascalCase (`WindowState`, `Translation`)
- **Constantes**: UPPER_SNAKE_CASE (`INITIAL_Z_INDEX`)
- **Funções**: camelCase (`handleClick`, `updatePosition`)

## ✅ Checklist para Nova Feature

- [ ] Defina tipos em `types/`
- [ ] Crie o componente em `components/`
- [ ] Adicione testes (se aplicável)
- [ ] Atualize `constants/` se necessário
- [ ] Documente em comentários
- [ ] Teste em mobile e desktop
- [ ] Verifique acessibilidade (a11y)

## 🤝 Contribuindo

1. Crie uma branch: `git checkout -b feature/nova-feature`
2. Commit: `git commit -m 'Add: nova feature'`
3. Push: `git push origin feature/nova-feature`
4. Abra um PR

---

Happy Coding! 🚀
