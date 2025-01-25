/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
        domains: ['placehold.co'],
    },
    basePath: '/TouchstoneTest'
}

module.exports = nextConfig