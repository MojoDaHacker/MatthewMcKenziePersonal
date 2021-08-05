import React from 'react'
import {EnvelopeFill, Linkedin, Github} from 'react-bootstrap-icons'
import { motion } from 'framer-motion'
import { Button, Nav } from 'react-bootstrap'

const Sidebar = ({ setShowContact }) => {

  const handleShowContact = e => {
    setShowContact(true)
  }

  return (
    <>
      <Nav className="h-100 position-fixed text-primary flex-column justify-content-end" style={{zIndex: 5}}>
        <Nav.Item>
          <Nav.Link onClick={handleShowContact}>
            <EnvelopeFill size={15} className="m-2 " />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link target="_blank" href="https://www.linkedin.com/in/matthew-mckenzie-5397401a5">
            <Linkedin size={15} className="m-2 " />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link target="_blank" href="https://www.github.com/MojoDaHacker">
            <Github size={15} className="m-2 " />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Sidebar



