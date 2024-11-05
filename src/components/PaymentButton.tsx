import React from 'react';
import { Coins } from 'lucide-react';

interface PaymentButtonProps {
  onPayment: () => Promise<void>;
  isProcessing: boolean;
  error: string | null;
}

export default function PaymentButton({ onPayment, isProcessing, error }: PaymentButtonProps) {
  return (
    <div className="space-y-2">
      <button
        onClick={onPayment}
        disabled={isProcessing}
        className="w-full py-4 px-6 rounded-lg flex items-center justify-center space-x-2 text-lg font-semibold bg-indigo-500 hover:bg-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Coins className="w-6 h-6" />
        <span>{isProcessing ? 'Processing...' : 'Pay 1 WLD to Listen'}</span>
      </button>
      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}
    </div>
  );
}