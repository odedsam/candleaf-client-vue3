/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly PROD: boolean;
  readonly DEV: boolean;
  readonly VITE_GOOGLE_CLIENT_ID:string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
