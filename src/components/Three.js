import React from 'react'
import pic04 from '../assets/images/pic04.jpg'
import { Container as Cont, Row, Col } from 'react-bootstrap'
import Appointment from './sharedComponents/AppointmentUI.js'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
  <section
  >

    <div className="d-flex flex-column">
      <Cont className="min-vh-100 p-5">
        <Appointment  />
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

export default Three
