/** @type {import('next').NextConfig} */
const editedConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // if (!isServer) {
    //   config.node = {
    //     fs: 'empty',
    //   };
    // }

    return config;
  },
};

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
