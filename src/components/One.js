import React from 'react'
import pic02 from '../assets/images/pic02.jpg'
import {Container as Cont, Row, Col, Card} from 'react-bootstrap'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import {Button} from 'react-bootstrap'
import Form from './sharedComponents/Form.js'

const One = props => (
  <section
    id="one"
    className=""
    style={{ backgroundImage: `url(${pic02})` }}
  >
    <div className="vh-100 d-flex flex-column">
      <Cont className=" h-100 d-flex flex-column justify-content-center text-primary">
        <Card className="p-4"> 
          <Row className="">
            <Form />
          </Row>
          <Row>
            <Fade bottom big>
              <header className="mx-auto">
                <h2 className="text-center">Search For The Home Of Your Dreams</h2>
              </header>
            </Fade>
          </Row>
        </Card>
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
export default One
