import React, {useState, useEffect, useRef} from 'react'
import {Container, Row, Col, Carousel, Button, Image} from 'react-bootstrap'
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons'
import {animateScroll as scroll, scroller, scrollSpy} from 'react-scroll'
import styled from 'styled-components'
import SVGs from '../assets/svgs/index'
import SVGBackgroundAnimation from '../components/sharedComponents/SVGBackgroundAnimation'


const AtmosphereShift = styled.div`
  height: 100vh;
  background-image: linear-gradient(black, white);
`

const Portfolio = ({content, setShowcase}) => {
  const containerRef = useRef(false)

  // useEffect(() => {
  //   scroller.scrollTo("portfolio", {
  //     duration: 3000,
  //     smooth: "easeInOutCubic",
  //   })
  // }, [])
  return (
    <Container id="" className="text-primary pt-5">
      <Row>
        <h1>{content.openHouseApp}</h1>
      </Row>
      <Row className="flex-nowrap">
        <Col md={7}>
          <Carousel className="w-100">
            {content.portfolioPieceImages.map((val, i) => (
              <Carousel.Item>
                <Image className="rounded" width="100%" src={val.fluid.srcWebp} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={5} className="overflow-hidden">
          <p>{content.portfolioDescription.portfolioDescription}</p>
        </Col>
      </Row>
      <Row>
        <Button onClick={() => setShowcase(false)} className="ml-auto rounded-pill">Back</Button>
      </Row>
    </Container>
  )

  // return ( 
  //   <>
  //     {/* <AtmosphereShift /> */}
  //     <Container className="position-relative d-flex justify-content-center vh-100" fluid>
  //       {/* <SVGBackgroundAnimation className="position-absolute" img={SVGs.HomeSVG}/> */}
  //       <Container id="portfolio" className="position-absolute pt-5">
  //         {content.map((contentVal, i) => (
  //           i !== contentKey ? null : 
  //           <>
  //             <Row>
  //               <h1>{contentVal.title}</h1>
  //             </Row>
  //             <Row>
  //               {contentVal.pictures.find(obj => obj.src !== false) == undefined ? null : (
  //                 <Col className="p-3">
  //                   <div className="d-flex flex-row">
  //                     <div className="my-auto">
  //                       <Button className="bg-transparent border-0" onClick={() => carouselIndex !== 0 ? setIndex(carouselIndex - 1) : setIndex(data[key].nodes.length - 1)}>
  //                         <CaretLeftFill width={25} />
  //                       </Button>
  //                     </div>
  //                     <Carousel activeIndex={carouselIndex} indicators={false} className="w-50 mx-auto" controls={false}>
  //                       {data[key].nodes.map((val, i) => (
  //                         <Carousel.Item key={i}>
  //                           <GatsbyImg className="rounded" fluid={val.childImageSharp.fluid} />
  //                         </Carousel.Item>
  //                       ))}
  //                     </Carousel>
  //                     <div className="my-auto">
  //                       <Button className="bg-transparent border-0" onClick={() => carouselIndex !== data[key].nodes.length - 1 ? setIndex(carouselIndex + 1) : setIndex(0)}>
  //                         <CaretRightFill width={25}/>
  //                       </Button>
  //                     </div>
  //                   </div>
  //                 </Col>
  //               )}
  //             </Row>
  //             <Row key={i}>
  //               <Col>
  //                 {contentVal.textContent.map((textContent, i) => (
  //                   <>
  //                     <p key={i}>
  //                       {textContent.join('')}
  //                     </p>
  //                   </>
  //                 ))}
  //               </Col>
  //             </Row>
  //           </>
  //         ))}
  //       </Container>
  //     </Container>
  //   </>
  // )
}


export default Portfolio