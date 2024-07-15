import withBundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/intl/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntlConfig({
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
      serverComponentsExternalPackages: ['@electric-sql/pglite'],
    },
    async rewrites() {
      return [
        {
          source: '/docs/:path*',
          destination: `${process.env.DOCS_URL}/docs/:path*`,
        },
        {
          source: '/:locale/docs/:path*',
          destination: `${process.env.DOCS_URL}/docs/:path*`,
        },
      ];
    },
  }),
);