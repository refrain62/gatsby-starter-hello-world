// import React from "react"
// 
// export default function Home() {
//   return <div>Hello world!</div>
// }

import { graphql } from "gatsby"
import React from "react"

export default ({ data }) => (
  <div>
    <h1>Gatsby + HASURA Sample</h1>
    <p>
      <a href="https://www.gatsbyjs.com/plugins/gatsby-source-graphql/">
        Using gatsby-source-graphql
      </a>
    </p>
    { data.hasura.profiles.map((profile, i) => (
      <p>{ profile.id } - { profile.name }</p>
    )) }
  </div>
)

export const query = graphql`
  query {
    hasura {
      profiles {
        id
        name
      }
    }
  }
`
