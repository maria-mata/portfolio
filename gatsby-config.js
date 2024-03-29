/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Maria Jose Mata, Software Engineer',
    description: 'Experienced software engineer, specialized in frontend development. I love crafting intuitive web interfaces and delivering seamless user experiences.',
    siteUrl: 'https://mariamata.dev',
    image: '/logo.png'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs']
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "${__dirname}/src/styles/global.scss";`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './src/images/'
      },
      __key: 'images'
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'pages',
        'path': './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'content',
        'path': './src/content/'
      },
      __key: 'content'
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': './src/images/logo.png'
      }
    },
  ]
};
