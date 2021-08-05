import { graphql } from "gatsby";

export default graphql`
  query IndexPageQuery {
    allContentfulEntry {
      nodes {
        ... on ContentfulBiosWho {
          who {
            who
          }
        }
        ... on ContentfulBiosWhat {
          what {
            what
          }
        }
        ... on ContentfulBiosWhy {
          why {
            why
          }
        }
      }
    }
    profilePicture : file(relativePath: {eq: "images/agentPic.jpeg"}, sourceInstanceName: {eq: "assets"}) {
      childImageSharp {
        fixed (width: 300 , quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`