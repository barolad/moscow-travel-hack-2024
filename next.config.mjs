/** @type {import('next').NextConfig} */
const nextConfig = {images: {
        remotePatterns: [
            {
                hostname: '**',
            },
        ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
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
