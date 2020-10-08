import React , { useState, useEffect } from 'react'
import {Container as Cont, Row, Col, Image} from 'react-bootstrap'
import KeysLogo from '../assets/images/logos/keysLogo.svg'
import Form from './sharedComponents/Form.js'
import BackImg from 'gatsby-background-image';
import {graphql, StaticQuery} from 'gatsby';
import { Link as ScrollLink } from 'react-scroll'
import styled, { keyframes }from "styled-components"

// const fade = keyframes`
//   from {
//     opacity : 0
//   } to {
//     opacity : 1
//   }
// `;

// const DB = styled.section`
//   animation: ${fade};
// `;

  const BG = props => {
    const [pics, changePic] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     changePic(pics => {
    //       if(pics === 5) return 0 
    //       return pics + 1
    //     })
    //   }, 10000)
    //   return () => clearInterval(interval);
    // }, [])

    return (
      <StaticQuery
        query={graphql`
          query {
            bannerBackgroundImg : allFile(filter: {sourceInstanceName: {eq: "bannerImgs"}}) {
              nodes {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  } 
                }
              }
            }
            agentPic : file(relativePath: {eq: "images/agentPic.jpeg"}, sourceInstanceName: {eq: "assets"}) {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        `}
        render={data => {
          const [...imgDataArr] = data.bannerBackgroundImg.nodes
          return (
            <BackImg
              Tag="section"
              id="banner"
              fluid={imgDataArr[pics].childImageSharp.fluid}
              fadeIn="soft"
            >
              <Banner agentPic={data.agentPic.childImageSharp.fixed.src} />
            </BackImg>
          )
        }}
      />
    )
  }

const Banner = props => {
  return (
    <> 
      <div style={{height: "100vh"}}>
        <Cont className="d-flex text-primary border border-primary h-100 flex-column justify-content-center">
          <Row className="mt-5">
            <Col xs={8}>
              <h1 className="text-wrap">If it's the Keys<br/>It's the Keys</h1>
              <h1 className="text-wrap"> you want<br/> I got</h1>
            </Col>
            <Col xs={4} className="">
              <Image src={props.agentPic} roundedCircle/> 
            </Col>
          </Row>
          <Row>
            <h2 className="mx-auto">eXP Realty in Florida</h2>
          </Row>
        </Cont>
      </div>

      <ScrollLink
        to="one"
        className="goto-next"
        activeClass="active"
        smooth={true}
        offset={50}
        duration={1500}
        spy={true}
      >
        Next
      </ScrollLink>
    </>
  )  
}

export default BG
