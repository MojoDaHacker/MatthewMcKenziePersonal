import React from 'react'
import { Jumbotron, Container as Cont, Row, Col } from 'react-bootstrap'
import Form from './sharedComponents/Form.js'
import Fade from 'react-reveal/Fade'

const Five = props => (
    <Fade duration={2500}>
      <Jumbotron className="container bg-primary">
        <Row as="header">
          <Col xs={4} className="text-center">
            <h2>Stay Connected</h2>
            <p>Get market trends, realtor news, and the newest listings straight to your email. </p>
          </Col>
          <Col>
            <Form newsletter />
          </Col>
        </Row>
      </Jumbotron>
    </Fade>
)
export default Five
