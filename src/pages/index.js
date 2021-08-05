import React, { useState } from 'react'
import { graphql } from 'gatsby'
import '../assets/scss/App.scss'
import { Helmet } from 'react-helmet'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const Home = props => {
  const profilePicture = props.data.profilePicture.childImageSharp.fixed.src
  const gitHubPinnedRepositories = props.data.gitHubPinnedRepositories.nodes[0].rawResult.data.viewer.pinnedItems.nodes
  const [showContact, setShowContact] = useState(false)

  const variants = {
    initial: {
      y: 0
    },
    visible: {
      y: "-100%",
    },
    hidden: {
      y: "100%"
    }
  }

  return (
    <Layout location="/" setShowContact={setShowContact}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Mckenzie Personal Site"
        meta={[
          { name: 'description', content: 'Real Estate Services by Matthew McKenzie' },
          { name: 'keywords', content: 'Real Estate, Investing, Buying, Selling, Rentals' },
        ]}
      />
      <AnimatePresence exitBeforeEnter>
        {showContact ?
          <motion.div key="home" exit={{y: "100%"}} initial={{y: "100%"}} animate={{y: 0}}>
            <Contact setShowContact={setShowContact} />
          </motion.div>
          :
          <motion.div key="showcase" exit={{y: "100%"}}>
            <Banner profilePicture={profilePicture} repos={gitHubPinnedRepositories} data={props.data}/>
          </motion.div>
        }
      </AnimatePresence>

    </Layout>
  )
}

export const query = graphql`
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
  gitHubPinnedRepositories : allGithubData {
    nodes {
      id
      rawResult {
        data {
          viewer {
            pinnedItems {
              nodes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
}
`

export default Home
