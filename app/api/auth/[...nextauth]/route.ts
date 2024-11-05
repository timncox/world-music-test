import NextAuth from 'next-auth'
import WorldcoinProvider from 'next-auth/providers/worldcoin'

const handler = NextAuth({
  providers: [
    WorldcoinProvider({
      clientId: process.env.NEXT_PUBLIC_WLD_APP_ID!,
      clientSecret: process.env.WLD_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, profile }) {
      if (profile?.sub) {
        token.worldcoinId = profile.sub
        token.verificationType = profile['https://id.worldcoin.org/v1']?.verification_level
      }
      return token
    },
    async session({ session, token }) {
      if (token?.worldcoinId) {
        session.user = session.user || {}
        session.user.worldcoinId = token.worldcoinId as string
        session.user.verificationType = token.verificationType as string
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === 'development',
})

export { handler as GET, handler as POST }