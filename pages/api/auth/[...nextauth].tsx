import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Login } from '@/utils/api-handler/login/page';

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { type: 'text' },
                password: { type: 'password' },
                role_user: { type: 'text' }
            },
            // @ts-ignore
            async authorize(credentials: any) {
                const user = await Login(credentials)
                if (user) {
                    return user
                  }
                throw new Error(user.message)
            },
        }),
    ],
    session: { strategy: 'jwt', maxAge: 1 * 24 * 60 * 60 }, // session expired time 10 minute
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user
            }
            return token
        },
        async session({ session, token, user }) {
            return { ...session, user:token.user  as Session['user'] }
        },
    },
    
}

export default NextAuth(authOptions)