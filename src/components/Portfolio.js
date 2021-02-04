import React, {useState} from 'react'
import {Container, Row, Col, Carousel, Button} from 'react-bootstrap'
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons'
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../assets/images/logos/OpenHouseKit.inline.svg'
import GatsbyImg from "gatsby-image"


const Portfolio = ({content, contentKey}) => {
  const [carouselIndex, setIndex] = useState(0)
  const data = useStaticQuery(graphql`
    query portfolioData {
      OpenHouseKit: allFile(filter: {sourceInstanceName: {regex: "/OpenHouseKit/"}}, sort: {fields: name}) {
        nodes {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          sourceInstanceName
          name
        }
      }
    }
  `)
  console.log(data[key])
  const key = Object.keys(data).find(elem => elem == content[contentKey].name)
  return ( 
    <Container className="pt-5 min-vh-100">
      {content.map((contentVal, i) => (
        i !== contentKey ? null : 
        <>
        {console.log(contentVal)}
          <Row>
            <h1>{contentVal.title}</h1>
          </Row>
          <Row>
            <Col xs={3} className="text-center my-auto">
              <div className="bg-primary rounded-lg">
                <Logo />
              </div>
            </Col>
            {contentVal.pictures.find(obj => obj.src !== false) == undefined ? null : (
              <Col className="p-3">
                <div className="d-flex flex-row">
                  <div className="my-auto">
                    <Button className="bg-transparent border-0" onClick={() => carouselIndex !== 0 ? setIndex(carouselIndex - 1) : setIndex(data[key].nodes.length - 1)}>
                      <CaretLeftFill width={25} />
                    </Button>
                  </div>
                  <Carousel activeIndex={carouselIndex} indicators={false} className="w-100" controls={false}>
                    {data[key].nodes.map((val, i) => (
                      <Carousel.Item key={i}>
                        <GatsbyImg fluid={val.childImageSharp.fluid} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div className="my-auto">
                    <Button className="bg-transparent border-0" onClick={() => carouselIndex !== data[key].nodes.length - 1 ? setIndex(carouselIndex + 1) : setIndex(0)}>
                      <CaretRightFill width={25}/>
                    </Button>
                  </div>
                </div>
              </Col>
            )}
          </Row>
          <Row key={i}>
            <Col>
              {contentVal.textContent.map((textContent, i) => (
                <>
                  <p key={i}>
                    {textContent.join('')}
                  </p>
                </>
              ))}
            </Col>
          </Row>
        </>
      ))}
    </Container>
  )
}


export default Portfolio