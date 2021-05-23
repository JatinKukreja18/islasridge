const linkResolver = require('./src/utils/linkResolver.js')

module.exports = {
  siteMetadata: {
    title: 'IslasRidge',
    description: "Isla's Ridge is the way I want to look after people. It's the way I live my life.",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon1.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Lato\:400,400,700,700i,900`,`Amiri\:400,400,700,700i`
        ],
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'islasridge',
        linkResolver: () => linkResolver,
        schemas: {
           homepage: require("./custom_types/homepage.json"),
           navigation: require("./custom_types/navigation.json"),
           page: require("./custom_types/page.json"),
           splash: require('./custom_types/splash.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://islasridge.us1.list-manage.com/subscribe/post?u=7b7adb5447ab1e6b4d82193aa&amp;id=c01a1b2d7c'
      }
    }
  ],
}
