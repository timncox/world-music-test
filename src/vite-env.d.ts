/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ID: string
  readonly VITE_RECIPIENT_WALLET: string
  readonly VITE_NEXT_AUTH_URL: string
  readonly VITE_NEXT_AUTH_SECRET: string
  readonly VITE_WORLDCOIN_CLIENT_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface MiniKitSDK {
  init: (config: { appId: string }) => Promise<void>;
  isAuthenticated: () => Promise<boolean>;
  signIn: () => Promise<{ success: boolean; error?: string }>;
  pay: (options: { amount: string; recipient: string; currency: string }) => Promise<{ success: boolean; error?: string }>;
}