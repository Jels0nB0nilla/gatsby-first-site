module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site',
    author: 'Jelson Bonilla'
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src', 
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
