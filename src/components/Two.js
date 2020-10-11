import React from 'react'
import FeaturedHome from './sharedComponents/FeaturedHome.js'
import {Container as Cont, Row, Col, Image} from 'react-bootstrap'
import pic03 from '../assets/images/pic03.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    // style={{ backgroundImage: `url(${pic03})` }}
  >
    <div className="vh-100 d-flex flex-column">
      <Cont className="h-100 d-flex justify-content-center text-primary" fluid>
        <Row className="">
          <Col xs={7}>
            <FeaturedHome  />
          </Col>
          <Col xs={3}>
            <Fade className="h-100" right big>
              <div className="h-100 text-center d-flex flex-column justify-content-center">
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
            </div>
            </Fade>
          </Col>
        </Row>
      </Cont>
      <ScrollLink
        to="one"
        className="goto-next text-center"
        activeClass="active"
        smooth={true}
        offset={50}
        duration={1500}
        spy={true}
      >
        Next
      </ScrollLink>
    </div>
  </section>
)

export default Two
