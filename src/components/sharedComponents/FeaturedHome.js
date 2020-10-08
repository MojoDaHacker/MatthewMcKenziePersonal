import React from 'react'
import {Container as Cont, Row, Card} from 'react-bootstrap'
import {useStaticQuery, graphql} from 'gatsby'
import GatsbyImg from 'gatsby-image'


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
    <Cont className="h-100 d-flex align-items-center">
      <Row>
        <Card>
          <Cont>
            <Row>
              <GatsbyImg fixed={getFeaturedHome.file.childImageSharp.fixed} />
            </Row>
          </Cont>
        </Card>
      </Row>
    </Cont>
  )
}

export default FeaturedHome