interface MiniKitAuth {
  success: boolean
  address?: string
  error?: string
}

interface MiniKitPayment {
  success: boolean
  transactionHash?: string
  error?: string
}

interface MiniKit {
  init: (options: { app_id: string }) => Promise<void>
  walletAuth: () => Promise<MiniKitAuth>
  pay: (options: { amount: string; currency: string; recipient: string }) => Promise<MiniKitPayment>
}

declare global {
  interface Window {
    MiniKit: MiniKit
  }
}