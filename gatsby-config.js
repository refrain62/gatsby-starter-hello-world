/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "HASURA",
        fieldName: "hasura",
        url: "http://10.5.1.43:8081/v1/graphql",
      },
    }
  ],
}
