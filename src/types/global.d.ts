// TypeScript global types and window extensions

declare global {
  interface Window {
    __VITE_HMR__?: {
      host: string;
      protocol: string;
      port: number;
      pathname: string;
    };
  }

  namespace NodeJS {
    interface ProcessEnv {
      VITE_API_URL?: string;
      VITE_APP_TITLE?: string;
    }
  }
}

export {};
