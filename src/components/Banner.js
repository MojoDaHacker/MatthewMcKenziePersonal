import React, {useState} from 'react'
import {Container as Cont, Row, Col, Image, ListGroup, Button} from 'react-bootstrap'
import Progress from './sharedComponents/ProgressComponent.js'
// import Canvas from './sharedComponents/LightningCanvas.js'
import { motion, AnimatePresence } from 'framer-motion'

const Banner = props => {
  const [portfolio, showPortfolio] = useState(false);

  const buttonVariant = {
    hidden: {
      scale: 0,
      opactiy: 0,
    },
    visible: {
      scale: 1,
      opactiy: 1
    }
  }
  const leftColVariant = {
    unMount: {
      x: "102%"
    },
    mount: {
      x: "0"
    },
    transition: {
      duration: 25,
      delay: 2
    }
  }
  const middleColVariant = {
    initial: {
      rotate: 0
    },
    transition: {
      rotate: 90
    }
  }
  const rightColVariant = {
    unMount: {
      x: "-102%"
    },
    mount: {
      x: "0"
    }
  }

  return ( 
    <>
      <section>
        {/* <Canvas /> */}
        <div className="d-flex flex-column">
          <Cont className="h-100 d-flex flex-column justify-content-center text-primary p-0" fluid>
            <Row className="w-100 p-3 justify-content-center" >
              <Col className="overflow-hidden" xs={5}>
                <motion.div variants={leftColVariant} initial="unMount" animate="mount" transition={{delay: 1}} className="text-center">
                  <div>
                    <h2 className="mx-auto">Matthew McKenzie</h2>
                  </div>
                  <div>
                    <Image className="" src={props.profilePicture} roundedCircle/> 
                  </div>
                </motion.div>
              </Col>
              <Col xs="auto" className="p-0">
                <div className="text-primary h-100 rounded-circle" style={{minWidth: 1, border: "1px solid"}}></div>
              </Col>
              <Col xs={5} className="overflow-hidden">
                <motion.div variants={rightColVariant} initial="unMount" animate="mount" transition={{when: "beforeChildren"}} className="h-100 d-flex flex-column">
                  <div className="text-center">
                    <h2 className="text-center">Full Stack Developer | UI/UX Designer</h2>
                    <p>
                      Developing websites and applications for the past 5 years using web technologies of the usual
                      HTML, CSS, and JS. In addition to technologies, I have gained experience in several frameworks
                      such as React, Node, Codeignitor, Laravel. However, I'm mostly familiar with the MERN Stack frameworks
                      to create web products.
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-center h-100 w-100 mx-auto">
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-transparent d-flex border-0">
                        <div className="text-center w-25">M</div>
                        <div className=" position-relative w-100"><Progress num={4}/></div>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent d-flex border-0">
                        <div className="text-center w-25">E</div>
                        <div className=" position-relative w-100"><Progress num={3}/></div>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent d-flex border-0">
                        <div className="text-center w-25">R</div>
                        <div className=" position-relative w-100"><Progress num={5}/></div>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent d-flex border-0">
                        <div className="text-center w-25">N</div>
                        <div className=" position-relative w-100"><Progress num={4}/></div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </motion.div>
              </Col>
            </Row>
            <Row className="w-100 p-3">
              <motion.div onHoverStart={() => showPortfolio(true)} className="mx-auto d-flex justify-content-center">
                <AnimatePresence exitBeforeEnter>
                  {!portfolio ? (
                    <motion.div key="portfolio" exit="hidden" initial="hidden" animate="visible" variants={buttonVariant}>
                      <Button className="rounded-pill">Portfolio</Button>
                    </motion.div>
                  ) : (
                    props.portfolioItems.map((val, i) => {
                      return (
                        <motion.div key={i} exit="hidden"  initial="hidden" animate="visible" onHoverEnd={() => showPortfolio(false)} variants={buttonVariant}>
                          <Button className="mx-2 rounded-pill" key={i} onClick={() => props.setShowcase(true)}>{val.name}</Button>
                        </motion.div>
                      )
                    })
                  )}
                </AnimatePresence>
              </motion.div>
            </Row>
          </Cont>
        </div>
      </section>
    </>
  )  
}

export default Banner