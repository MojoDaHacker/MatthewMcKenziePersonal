import React, {useState, useEffect} from 'react'
import { graphql } from 'gatsby'
import '../assets/scss/App.scss'
import { Helmet } from 'react-helmet'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Portfolio from '../components/Portfolio'

const Home = props => {
  const availablePortfolioPieces = props.data.allContentfulContentType.nodes
  const profilePicture = props.data.profilePicture.childImageSharp.fixed.src
  const openHouseApplicationContent = props.data.contentfulOpenHouseApplication
  const [showcase, setShowcase] = useState(false)

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
  useEffect(() => {
    console.log(showcase)
  },[showcase])


  return (
    <Layout location="/">
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Mckenzie Personal Site"
        meta={[
          { name: 'description', content: 'Real Estate Services by Matthew McKenzie' },
          { name: 'keywords', content: 'Real Estate, Investing, Buying, Selling, Rentals' },
        ]}
      />
      <AnimatePresence exitBeforeEnter>
        {showcase ?
          <motion.div key="home" exit={{y: "100%"}} initial={{y: "100%"}} animate={{y: 0}}>
            <Portfolio content={openHouseApplicationContent} setShowcase={bool => setShowcase(bool)} />
          </motion.div>
          :
          <motion.div key="showcase" exit={{y: "100%"}}>
            <Banner portfolioItems={availablePortfolioPieces} profilePicture={profilePicture} setShowcase={bool => setShowcase(bool)}/>
          </motion.div>
        }
      </AnimatePresence>

    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
    contentfulOpenHouseApplication {
      portfolioDescription {
        portfolioDescription
      }
      portfolioPieceImages {
        fluid {
          srcWebp
          srcSetWebp
        }
      }
      openHouseApp
    }
    allContentfulContentType {
      nodes {
        name
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

export default Home
