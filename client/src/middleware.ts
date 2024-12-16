// AUTH MIDDLEWARE:
//  Allows to enter private routes,
//  While been based on user's JWT token

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios'

export async function middleware(req: NextRequest) {
    const redirect = () => NextResponse.redirect(new URL('/auth', req.url))
    // Allowed routes, without auth
    if (
        req.nextUrl.pathname === '/' ||
        req.nextUrl.pathname === '/auth'
    ) {
        return NextResponse.next()
    }

    const token = req.cookies.get('jwt')
    if (!token) { return redirect() }

    // Trying to verify the JWT
    try {
        const response = await axios.post('http://localhost:8080/verify',
            { token: token.value },
            { withCredentials: true }
        )
        if (response.data.verified) {
            return NextResponse.next()
        } else {
            return redirect() // Redirect if not verified
        }
    } catch (err) {
        console.log(`Error verifying JWT: ${err}`)
        return redirect()
    }
}

// Preventing static assets from matching
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}