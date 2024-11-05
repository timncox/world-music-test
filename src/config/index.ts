// Environment variables are injected during build time
export const config = {
  appId: import.meta.env.VITE_WLD_APP_ID || '',
  recipientWallet: import.meta.env.VITE_RECIPIENT_WALLET || '',
  nextAuthUrl: import.meta.env.VITE_NEXTAUTH_URL || 'http://localhost:5173',
  nextAuthSecret: import.meta.env.VITE_NEXTAUTH_SECRET || ''
}