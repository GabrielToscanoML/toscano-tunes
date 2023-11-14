/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'is1-ssl.mzstatic.com',
          },
        ],
    },
}

module.exports = nextConfig
