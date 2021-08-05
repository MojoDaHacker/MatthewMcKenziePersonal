import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap'
import { ChevronLeft } from 'react-bootstrap-icons'

const Contact = ({ setShowContact }) => {

  const handleLinkClick = (eKey, e) => {
    setShowContact(false)
  }

  return (
    <Container className="h-100 d-flex flex-column justify-content-center my-auto text-primary">
      <Row className="justify-content-center">
        <Col className="overflow-hidden" xs={8}>
          <Nav.Link onClick={handleLinkClick} className="pl-0">
            <ChevronLeft size={24} />
          </Nav.Link>
          <Form>
            <Form.Group>
              <Form.Control className="bg-transparent border-primary text-primary" type="text" placeholder="Title..." />
            </Form.Group>
            <Form.Group>
              <Form.Control className="bg-transparent border-primary text-primary" as="textarea" style={{ height: "300px" }} placeholder="Message..." />
            </Form.Group>
            <Button type="submit" className="float-right">Send</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;