/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['jetaircraftmuseum.ca', 'firebasestorage.googleapis.com']
    }
}

module.exports = nextConfig
