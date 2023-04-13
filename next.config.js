/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    future: { webpack5: true },
    localeDetection: false,
  },
}

module.exports = nextConfig
