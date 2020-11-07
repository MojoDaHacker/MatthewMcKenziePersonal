import React from 'react'
import {Container as Cont, Row, Col, Card, Button} from 'react-bootstrap'
import {useStaticQuery, graphql} from 'gatsby'
import GatsbyImg from 'gatsby-image'
import Fade from 'react-reveal/Fade'


const FeaturedHome = props => {
  const getFeaturedHome = useStaticQuery(graphql`
    query {
      file(childImageSharp: {fixed: {originalName: {eq: "featuredHome.jpg"}}}) {
        childImageSharp {
          fixed(height: 500, width: 500) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  
  console.log(getFeaturedHome.file.childImageSharp.fluid)

  return (
    <Cont className="h-100 d-flex align-items-center justify-content-end">
      <Row>
        <Col>
          <Row className="mx-auto d-flex justify-content-center">
            <Card>
              <GatsbyImg fixed={getFeaturedHome.file.childImageSharp.fixed} />
            </Card>
          </Row>
          <Row>
            <h5 className="mx-auto mt-2">$ 000,000</h5>
          </Row>
        </Col>
        <Col xs={4}>
          <Fade className="h-100" right big>
            <div className="h-100 text-center d-flex flex-column align-items-center justify-content-center">
              <header>
                <h2>Interdum amet non magna accumsan</h2>
                <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
              </header>
              <p>
                Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim
                mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet
                augue varius tempus lobortis porttitor lorem et accumsan consequat
                adipiscing lorem.
              </p>
              <Button>More Details</Button>
            </div>
          </Fade>
        </Col>
      </Row>
    </Cont>
  )
}

export default FeaturedHome