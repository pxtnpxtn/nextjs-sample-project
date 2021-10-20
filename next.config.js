const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  images: {
    domains: ['lorempixel.com'],
  },
  pwa: {
    dest: 'public'
  },
  reactStrictMode: true,
})
