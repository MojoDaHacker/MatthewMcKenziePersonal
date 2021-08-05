import React, { useState } from 'react'
import { Container, Row, Col, Image, Tab, Nav } from 'react-bootstrap'
import Who from './Who'
import What from './What'
import Why from './Why'
import { motion, AnimatePresence } from 'framer-motion'

import ReactFavicon from '../assets/favicons/react_favicon.ico'
import MongoFavicon from '../assets/favicons/mongo_favicon.ico'
import NodeFavicon from '../assets/favicons/nodejs_favicon.ico'
import ExpressFavicon from '../assets/favicons/express_favicon.ico'


const Banner = props => {
  const [buttonSelected, setButtonSelected] = useState(null)
  const variants = {
    drawerClosed: {
      x: "100%",
    },
    drawerOpen: {
      x: 0,
      transition: {
        duration: 1
      }
    },
    underlineButton: {

    }
  }

  const handleButtonClick = key => setButtonSelected(key)
  const buttonCondition = buttonSelected !== null
  const content = props.data.allContentfulEntry.nodes
  const contentComponents = [Who, What, Why]

  return ( 
    <>
      <section>
        {/* <Canvas /> */}
        <div className="d-flex flex-column">
          <Container  className="vh-100 d-flex flex-column justify-content-center text-primary p-0">
            <Tab.Container>
              <Row className="w-100 h-50 p-3 justify-content-center overflow-hidden" >
                <Col as={motion.div} layout transition={{duration: 1}} className="overflow-hidden d-flex justify-content-center" xs={buttonCondition ? 3 : 6}>
                  <div className="text-center">
                    {!buttonCondition && (
                      <h2 className="mx-auto">Matthew McKenzie</h2>
                    )}
                    <div>
                      <Image className="" src={props.profilePicture} roundedCircle fluid/> 
                    </div>
                  </div>
                </Col> 
                {buttonCondition && (
                  <AnimatePresence>
                    <Col
                      className="h-100"
                      xs={7}
                      as={motion.div}
                      key="linkAction"
                      initial="drawerClosed"
                      animate="drawerOpen"
                      exit=""
                      variants={variants}
                    >
                      <Tab.Content className="h-100 overflow-auto">
                      {contentComponents.map((val, i) => (
                        <Tab.Pane key={i} eventKey={i} className="overflow-auto">
                          {React.createElement(
                            val,
                            props.repos,
                            content[i]
                          )}
                        </Tab.Pane>
                      ))}
                      </Tab.Content>
                    </Col>
                  </AnimatePresence>
                )}
              </Row>
              <Row className="w-100 p-3">
                <Col>
                  <Nav className="mx-auto d-flex justify-content-center">
                    {["Who", "What", "Why"].map((val, i) => (
                      <Nav.Item key={i} className={`rounded-pill m-3 ${buttonSelected == i && "border-bottom border-primary"}`}>
                        <Nav.Link 
                          eventKey={i}
                          onSelect={handleButtonClick}
                          children={val}
                        />
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </div>
      </section>
    </>
  )  
}


export default Banner