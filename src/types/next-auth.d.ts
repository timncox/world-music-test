import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      worldcoinId?: string;
      verificationType?: string;
    } & DefaultSession['user'];
  }

  interface Profile {
    sub?: string;
    'https://id.worldcoin.org/v1'?: {
      verification_level: string;
    };
  }

  interface JWT {
    worldcoinId?: string;
    verificationType?: string;
  }
}