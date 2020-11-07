import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import GatsbyImg from 'gatsby-image'
import {Container as Cont, Row, Col, Card} from 'react-bootstrap'
import Form from './sharedComponents/Form.js'


const One = props => {
  const getFeaturedHomes = useStaticQuery(graphql`
      query {
        allImageSharp(filter: {original: {src: {regex: "/featuredHome/"}}}) {
          edges {
            node {
              fixed(width: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `)
  console.log(getFeaturedHomes)

  return (
    <section
      style={{backgroundColor: "#ededed"}}
      id="scrollTarget"
    >
      <div className="d-flex flex-column">
        <Cont className="d-flex flex-column justify-content-center text-primary">
          <Row className="mt-5">
            {getFeaturedHomes.allImageSharp.edges.map(val => (
              <Col className="d-flex flex-column align-items-center">
                <GatsbyImg className="mb-2 rounded-sm"fixed={val.node.fixed} />
                <h6># Bed</h6>
                <h6># Bath</h6>
                <h6>$ 000,000</h6>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Form />
          </Row>
        </Cont>
      </div>

    </section>
  )
}


export default One
