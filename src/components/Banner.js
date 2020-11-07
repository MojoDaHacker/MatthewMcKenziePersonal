import React from 'react'
import {Container as Cont, Row, Col, Image} from 'react-bootstrap'
import {ArrowDownShort} from 'react-bootstrap-icons'
import {TelephoneFill} from 'react-bootstrap-icons'
import KeysLogo from '../assets/images/logos/keysLogo.inline.svg'
import BackgroundSlider from 'gatsby-image-background-slider'
import {graphql, StaticQuery} from 'gatsby';
import { Link as ScrollLink } from 'react-scroll'

const getBGImgs = props => {

  return (
    <StaticQuery
      query={graphql`
        query {
          backgrounds : allFile(filter: {sourceInstanceName: {eq: "bannerImgs"}}) {
            nodes {
              relativePath
              childImageSharp {
                fluid (quality : 100) {
                  ...GatsbyImageSharpFluid
                } 
              }
            }
          }
          agentPic : file(relativePath: {eq: "images/agentPic.jpeg"}, sourceInstanceName: {eq: "assets"}) {
            childImageSharp {
              fixed (width: 300 , quality: 85) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Banner bgImgs={data} agentPic={data.agentPic.childImageSharp.fixed.src} />
        )
      }}
    />
  )
}

const Banner = props => {
  return ( 
    <>
      <section>
        <div className="vh-100 d-flex flex-column">
          <Cont className="h-100 d-flex flex-column justify-content-center text-primary">
            <Row className="w-100">
              <Col xs={7} className="pl-5 my-auto text-center">
                <h1 style={{lineHeight: 1.5}} className="d-inline-block text-right text-wrap">If it's the<br/>It's the</h1>
                <KeysLogo className="mb-5" width="200px" height="200px" />
                <h1 style={{lineHeight: 1.5}} className="d-inline-block text-left text-wrap"> you want<br/> I got</h1>
                <Row>
                  <div className="mx-auto">
                    <h4><TelephoneFill size={35} /> 786-868-8452</h4>
                  </div>
                </Row>
              </Col>
              <Col xs={5} className="">
                <div className="ml-auto">
                  <Image className="float-right" src={props.agentPic} roundedCircle/> 
                </div>
              </Col>
            </Row>
            <Row>
              <h2 className="mx-auto mt-5">eXP Realty in Florida</h2>
            </Row>
          </Cont>
          <ScrollLink
            to="scrollTarget"
            className="text-center"
            activeClass="active"
            smooth={true}
            offset={-5} 
            duration={2000}
            spy={true}
          >
            <ArrowDownShort size={35} />
          </ScrollLink>
        </div>
      </section>
      <BackgroundSlider
        query={props.bgImgs}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={8} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={["pic01.jpg", "pic02.jpg", "pic03.jpg", "pic04.jpg", "pic05.jpg", "pic06.jpg"]} 
        style={{
          filter: "brightness(60%)"
        }}

      />
    </>
  )  
}

export default getBGImgs