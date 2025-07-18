/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            { // Temporary, is using in Drawer
                protocol: "https",
                hostname: "spectrumofroses.com",
                pathname: '/wp-content/uploads/**'
            },
            { // Temporary, is using in DemoSelection
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/photo-1726534168836-59dff8524925**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            { // Users' avatars
                protocol: 'https',
                hostname: 'pnhoqfaxfsmdploovnku.supabase.co'
            }
        ]
    }
}

export default nextConfig
