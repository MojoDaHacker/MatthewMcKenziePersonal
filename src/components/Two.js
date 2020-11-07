import React from 'react'
import FeaturedHome from './sharedComponents/FeaturedHome.js'
import {Container as Cont, Row, Col, Image} from 'react-bootstrap'
import pic03 from '../assets/images/pic03.jpg'
import { Link as ScrollLink } from 'react-scroll'


const Two = props => (
  <section className="vh-100">
    <Cont className="h-100 d-flex justify-content-center text-primary" fluid>
      <Row>
        <FeaturedHome/>
      </Row>
    </Cont>
  </section>
)

export default Two
