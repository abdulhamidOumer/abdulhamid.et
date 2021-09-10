/** @type {import('next').NextConfig} */
const editedConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.fallback = { fs: false };

    return config;
  },
};

editedConfig.webpack5 = true;

editedConfig['i18n'] = {
  locales: ['en-US', 'am'],
  defaultLocale: 'en-US',
  localeDetection: true,
};

editedConfig.images = {
  domains: ['abdulhamid.et', 'images.ctfassets.net'],
};
editedConfig.target = 'serverless';

module.exports = editedConfig;
