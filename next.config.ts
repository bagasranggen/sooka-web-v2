import type { NextConfig } from 'next';

const REMOTE_HOSTNAMES = process?.env?.NEXT_PUBLIC_IMAGE_REMOTE_HOSTNAME
    ? process.env.NEXT_PUBLIC_IMAGE_REMOTE_HOSTNAME.split(',')
    : [];

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    staticPageGenerationTimeout: 1000,
    images: {
        remotePatterns: REMOTE_HOSTNAMES.map((item: string) => ({ hostname: item })),
    },
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
