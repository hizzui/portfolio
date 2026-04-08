export type WindowType = 'about' | 'work' | 'stack' | 'contact';
export type Language = 'pt' | 'en';

export interface WindowState {
  id: string;
  title: string;
  type: WindowType;
  x: number;
  y: number;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  width?: number;
  height?: number;
  data?: Record<string, unknown>;
  headerColor?: string;
}

export interface Translation {
  about: {
    title: string;
    content: string;
  };
  work: {
    title: string;
    content: string;
  };
  stack: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    content: string;
  };
  [key: string]: any;
}
