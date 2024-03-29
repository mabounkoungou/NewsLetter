import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{
            hostname:"media.beehiiv.com"
        },
    ],
    },
};

export default nextConfig;
