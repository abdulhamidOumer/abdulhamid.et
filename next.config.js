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
  locales: ['en', 'am'],
  defaultLocale: 'en',
  localeDetection: true,
};

editedConfig.images = {
  domains: ['abdulhamid.et'],
};
editedConfig.target = 'serverless';

module.exports = editedConfig;
