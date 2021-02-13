import React, {useState, useEffect, useRef} from 'react'
import {Container, Row, Col, Carousel, Button} from 'react-bootstrap'
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons'
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../assets/images/logos/OpenHouseKit.inline.svg'
import GatsbyImg from "gatsby-image"
import {animateScroll as scroll, scroller, scrollSpy} from 'react-scroll'
import styled from 'styled-components'
import SVGs from '../assets/svgs/index'
import SVGBackgroundAnimation from '../components/sharedComponents/SVGBackgroundAnimation'


const AtmosphereShift = styled.div`
  height: 100vh;
  background-image: linear-gradient(black, white);
`
const Portfolio = ({content, contentKey}) => {
  const containerRef = useRef(false)
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

  useEffect(() => {
    scroller.scrollTo("portfolio", {
      duration: 3000,
      smooth: "easeInOutCubic",
    })
  }, [])

  // console.log(containerRef.current.clientWidth)
  const key = Object.keys(data).find(elem => elem == content[contentKey].name)
  return ( 
    <>
      {/* <AtmosphereShift /> */}
      <Container className="position-relative d-flex justify-content-center vh-100" fluid>
        <SVGBackgroundAnimation className="position-absolute" img={SVGs.HomeSVG}/>
        <Container id="portfolio" className="position-absolute pt-5">
          {content.map((contentVal, i) => (
            i !== contentKey ? null : 
            <>
            {console.log(contentVal)}
              <Row>
                <h1>{contentVal.title}</h1>
              </Row>
              <Row>
                {contentVal.pictures.find(obj => obj.src !== false) == undefined ? null : (
                  <Col className="p-3">
                    <div className="d-flex flex-row">
                      <div className="my-auto">
                        <Button className="bg-transparent border-0" onClick={() => carouselIndex !== 0 ? setIndex(carouselIndex - 1) : setIndex(data[key].nodes.length - 1)}>
                          <CaretLeftFill width={25} />
                        </Button>
                      </div>
                      <Carousel activeIndex={carouselIndex} indicators={false} className="w-50 mx-auto" controls={false}>
                        {data[key].nodes.map((val, i) => (
                          <Carousel.Item key={i}>
                            <GatsbyImg className="rounded" fluid={val.childImageSharp.fluid} />
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
      </Container>
    </>
  )
}


export default Portfolio