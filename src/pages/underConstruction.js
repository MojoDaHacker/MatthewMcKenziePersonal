import React from 'react'
import Layout from '../components/layout'
import { Jumbotron } from 'react-bootstrap'

const UnderConstructionPage = props => {
  console.log(props);
  return(
    <Layout>
      <section style={{height: "75vh"}} className="d-flex justify-content-center">
        <Jumbotron className="w-50 mt-5 mx-auto text-primary">
          <h2>Page Still Under Constuction...</h2>
        </Jumbotron>
      </section>
    </Layout>
  )
}

export default UnderConstructionPage
