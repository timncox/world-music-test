import { ReactNode } from 'react';
import { MiniKitProvider as MiniKitReactProvider } from '@worldcoin/minikit-react';

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  return <MiniKitReactProvider>{children}</MiniKitReactProvider>;
}