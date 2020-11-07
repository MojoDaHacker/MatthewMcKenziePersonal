import React from 'react'
import '../assets/scss/App.scss'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
import Five from '../components/Five'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Mckenzie's Keys"
          meta={[
            { name: 'description', content: 'Real Estate Services by Matthew McKenzie' },
            { name: 'keywords', content: 'Real Estate, Investing, Buying, Selling' },
          ]}
        />
        <Banner />
        <One />
        <Two />
        <Three />
        <Five />
      </Layout>
    )
  }
}

export default Home
