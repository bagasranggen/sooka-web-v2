import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    staticPageGenerationTimeout: 1000,
    async rewrites() {
        return [
            {
                source: '/api/media/:path*',
                destination: `${process.env.CMS_URL}/api/media/:path*`,
            },
        ];
    },
};

export default nextConfig;
