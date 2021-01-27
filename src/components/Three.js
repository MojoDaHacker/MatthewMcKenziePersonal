import React from 'react'
import { Container as Cont, Row, Col } from 'react-bootstrap'
import Appointment from './sharedComponents/AppointmentUI.js'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
  <section
  >

    <div className="d-flex flex-column">
      <Cont className="min-vh-100 p-5">
        {/* <Appointment  /> */}
      </Cont>
    </div>

  </section>
)

export default Three
