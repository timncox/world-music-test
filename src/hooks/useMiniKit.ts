import { useState, useEffect } from 'react'
import { config } from '@/config'

export function useMiniKit() {
  const [isInitialized, setIsInitialized] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initializeMiniKit = async () => {
      try {
        if (typeof window.MiniKit?.init === 'function') {
          await window.MiniKit.init({ app_id: config.appId })
          setIsInitialized(true)
        } else {
          throw new Error('MiniKit not found')
        }
      } catch (err) {
        console.error('MiniKit initialization failed:', err)
        setError('Failed to initialize World ID')
      }
    }

    const script = document.createElement('script')
    script.src = 'https://id.worldcoin.org/minikit.js'
    script.async = true
    script.onload = () => {
      initializeMiniKit()
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const authenticate = async () => {
    if (!isInitialized) {
      throw new Error('MiniKit not initialized')
    }
    return await window.MiniKit.walletAuth()
  }

  const pay = async () => {
    if (!isInitialized) {
      throw new Error('MiniKit not initialized')
    }
    return await window.MiniKit.pay({
      amount: '1',
      currency: 'WLD',
      recipient: config.recipientWallet
    })
  }

  return {
    isInitialized,
    error,
    authenticate,
    pay
  }
}