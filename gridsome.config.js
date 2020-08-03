// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()

module.exports = {

  siteName: '------',
  siteUrl: 'juicee.design',
  titleTemplate: 'Juicee Design',
  siteDescription: 'Your application designed in just two weeks!',
  icon: './src/assets/images/favicon.png',

  // icon: {
  //   favicon: {
  //     src: './src/favicon.ico',
  //     sizes: [16, 32, 96]
  //   }
  // },

  chainWebpack: config => {
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/EnvironmentPlugin'), ['DB_USER'])
  },
  plugins: [{
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GRIDSOME_GA_ID
      }
    },
  ],
}