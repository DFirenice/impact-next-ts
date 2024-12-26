import NextAuth, { DefaultSession, DefaultUser, JWT } from "next-auth"

declare module "next-auth" {
    interface Session {
        accessToken?: string
        user: {
            id?: string
            accessToken?: string
        } & DefaultSession["user"]
    }

    interface User extends DefaultUser {
        id?: string
        jwt?: string, // Acess token
        refresh?: string // Refresh token
        avatarUrl?: string | null
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string
        refreshToken?: string
        accessTokenExpires?: number
        user?: User
    }
}