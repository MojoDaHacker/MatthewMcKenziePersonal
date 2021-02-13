import React, {useState} from 'react'
import {Container as Cont, Row, Col, Image, ListGroup, Button} from 'react-bootstrap'
import {ArrowDownShort} from 'react-bootstrap-icons'
import {EnvelopeFill, Linkedin, Github} from 'react-bootstrap-icons'
import {graphql, StaticQuery} from 'gatsby';
import Progress from './sharedComponents/ProgressComponent.js'
import Canvas from './sharedComponents/LightingBoltCanvas'
import Portfolio from './Portfolio.js'
import { motion } from 'framer-motion'

const getBGImgs = props => {

  return (
    <StaticQuery
      query={graphql`
        query {
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
          <Banner 
            bgImgs={data} 
            agentPic={data.agentPic.childImageSharp.fixed.src} 
            setShowcase={props.setShowcase} 
            portfolioItems={props.portfolioItems} 
          />
        )
      }}
    />
  )
}

const Banner = props => {
  const [portfolio, showPortfolio] = useState(false);

  const variants = {
    hidden: {
      scale: 0,
      opactiy: 0,
      display: "none"
    },
    visible: {
      scale: 1,
      opactiy: 1
    }
  }


  return ( 
    <>
      <section style={{backgroundColor: "black"}}>
        {/* <Canvas /> */}
        <div className="vh-100 d-flex flex-column">
          <Cont className="h-100 d-flex flex-column justify-content-center text-primary">
            <Row className="w-100" onMouseOver={props => showPortfolio(false)} >
              <Col xs={5}>
                <div className="text-center">
                  <h2 className="mx-auto">Matthew McKenzie</h2>
                </div>
                <div className="text-center">
                  <Image className="" src={props.agentPic} roundedCircle/> 
                </div>
                <ListGroup className="p-2">
                  <ListGroup.Item className="bg-transparent border-0"><EnvelopeFill className="m-2" />mojomckenzie@knights.ucf.edu</ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border-0"><Linkedin className="m-2" />linkedin.com/in/matthew-mckenzie-5397401a5</ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border-0"><Github className="m-2" />github.com/MojoDaHacker</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={7} className="d-flex flex-column">
                <div className="text-center">
                  <h2 className="text-center">Full Stack Developer | UI/UX Designer</h2>
                  <p>
                    Developing websites and applications for the past 5 years using web technologies of the usual
                    HTML, CSS, and JS. In addition to technologies, I have gained experience in several frameworks
                    such as React, Node, Codeignitor, Laravel. However, I'm mostly familiar with the MERN Stack frameworks
                    to create web products.
                  </p>
                </div>
                <div className="d-flex flex-column justify-content-center h-100 w-75 mx-auto">
                  <ListGroup>
                    <ListGroup.Item className="bg-transparent d-flex">
                      <div className="text-center w-25">M</div>
                      <div className=" position-relative overflow-hidden w-100"><Progress num={4}/></div>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent d-flex">
                      <div className="text-center w-25">E</div>
                      <div className=" position-relative overflow-hidden w-100"><Progress num={3}/></div>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent d-flex">
                      <div className="text-center w-25">R</div>
                      <div className=" position-relative overflow-hidden w-100"><Progress num={5}/></div>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent d-flex">
                      <div className="text-center w-25">N</div>
                      <div className=" position-relative overflow-hidden w-100"><Progress num={4}/></div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
            </Row>
            <Row className="w-100">
              <motion.div className="mx-auto d-flex justify-content-center">
                <motion.div className="" animate={portfolio ? "hidden" : "visible"} variants={variants}>
                  <Button
                    onMouseOver={() => showPortfolio(true)}
                    className="rounded-pill"
                  >
                    Portfolio
                  </Button>
                </motion.div>
                {
                  props.portfolioItems.map((val, i) => {
                    return (
                      <motion.div animate={portfolio ? "visible" : "hidden"} variants={variants}>
                        <Button className="mx-2 rounded-pill" key={i} onClick={() => props.setShowcase(Portfolio, i)}>{val}</Button>
                      </motion.div>
                    )
                  })
                }
              </motion.div>
            </Row>
          </Cont>
        </div>
      </section>
    </>
  )  
}

export default getBGImgs