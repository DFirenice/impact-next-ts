/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            { // Temporary, is using in Drawer
                protocol: "https",
                hostname: "spectrumofroses.com",
                pathname: '/wp-content/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            }
        ]
    }
}

export default nextConfig
