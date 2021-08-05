import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar.js'
// import '../assets/scss/main.scss'

const Layout = ({ children, setShowContact }) => {

  return (
    <div className="min-vh-100 vh-100 bg-dark">
      <Sidebar setShowContact={setShowContact} />
      <Container className="h-100 d-flex flex-column justify-content-center my-auto" fluid>
        <Row>
          <Col className="overflow-hidden">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Layout;