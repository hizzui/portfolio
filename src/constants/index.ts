import type { Translation } from '../types';

export const TRANSLATIONS: Record<'pt' | 'en', Translation> = {
  pt: {
    about: {
      title: '~/about.md',
      content: 'Desenvolvedor Back-End especializado em Python e FastAPI. Apaixonado por criar soluções backend escaláveis, robustas e elegantes.',
    },
    work: {
      title: '~/projects/featured',
      content: 'Projetos em destaque',
    },
    stack: {
      title: '~/skills.json',
      content: 'Stack de tecnologias',
    },
    contact: {
      title: '~/contact.sh',
      content: 'Entre em contato',
    },
  },
  en: {
    about: {
      title: '~/about.md',
      content: 'Back-End Developer specialized in Python and FastAPI. Passionate about creating scalable, robust and elegant backend solutions.',
    },
    work: {
      title: '~/projects/featured',
      content: 'Featured projects',
    },
    stack: {
      title: '~/skills.json',
      content: 'Technology stack',
    },
    contact: {
      title: '~/contact.sh',
      content: 'Get in touch',
    },
  },
};
