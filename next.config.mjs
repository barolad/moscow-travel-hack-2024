/** @type {import('next').NextConfig} */
const nextConfig = {images: {
        remotePatterns: [
            {
                hostname: '**',
            },
        ],
    },
    rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://185.104.251.6:8080/api/:path*",
            },
        ];
    },};

export default nextConfig;
