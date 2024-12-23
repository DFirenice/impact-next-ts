import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios, { isAxiosError } from "axios"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'E-mail', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            // Expected credentials to be { email & password }
            authorize: async (credentials) => {
                // Authorizing user on backend
                try {
                    const { data } = await axios.post(
                        `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/login`,
                        { email: credentials?.email, password: credentials?.password }
                    )
                    // Returning 'user'
                    return {
                        id: data.user._id,
                        username: data.user.username,
                        email: data.user.email,
                        jwt: data.token, // Acess token
                        refresh: data.refresh // Refresh token
                    }
                } catch (err) {
                    console.error('Error in authorize: ', err)
                    return null
                }
            }
        })
    ],
    callbacks: {
        // Auth Process:
        // authorize() (in CredentialsProvider) --> jwt() --> session() --> useSession()
        async jwt({ token, user }) {
            const isAccessTokenExpired = Date.now() > (token.accessTokenExpires || 0)

            if (user) {
                token.accessToken = user.jwt
                token.accessTokenExpires = Date.now() + 15 * 60 * 1000 // 15 mins
                token.refreshToken = user.refresh
                token.user = user
            } else if (isAccessTokenExpired) {
                try {
                    // Refreshing both if accessToken expired
                    const res = await axios.post(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/refresh-token`,
                        { token: token.refreshToken }
                    )

                    token.accessToken = res.data.accessToken
                    token.accessTokenExpires = Date.now() + 15 * 60 * 1000 // 15 mins
                    token.refreshToken = res.data.refreshToken || token.refreshToken
                } catch (err) {
                    if (isAxiosError(err)) {
                        console.error("Refresh token failed:", err.message)
                    } else { console.error("Refresh token failed, unexpected error!") }
                }
            }

            return token
        },
        // Making data available to user's session
        async session({ session, token }) {
            session.accessToken = token.accessToken
            session.user = token.user
            return session
        }
    },
    session: { strategy: 'jwt' },
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }