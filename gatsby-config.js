module.exports = {
  siteMetadata: {
    title: 'Fantazi saveti',
    author: 'Cumberbatch',
    description: 'Najbolji saveti za Fantasy Premier League',
    keywords: 'fantazi, saveti, premijer liga, fpl, premijer liga fantazi',
    url: 'https://www.fantazi-saveti.com'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-177370134-1",
          head: true,
          anonymize: true,
          pageTransitionDelay: 0
        }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
