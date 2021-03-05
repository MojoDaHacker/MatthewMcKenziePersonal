import React from 'react'
import {EnvelopeFill, Linkedin, Github} from 'react-bootstrap-icons'
import { motion } from 'framer-motion'
import { ListGroup, Nav } from 'react-bootstrap'

const Sidebar = ({ children }) => (
  <>
    <Nav className="h-100 position-fixed text-primary flex-column justify-content-end" style={{zIndex: 5}}>
      <Nav.Item>
        <Nav.Link href="mailto: mojomckenzie@knights.ucf.edu"><EnvelopeFill size={15} className="m-2 " />
          <div className="d-inline">mojomckenzie@knights.ucf.edu</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.linkedin.com/in/matthew-mckenzie-5397401a5"><Linkedin size={15} className="m-2 " />
          <div className="d-inline">linkedin.com/in/matthew-mckenzie-5397401a5</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.github.com/MojoDaHacker"><Github size={15} className="m-2 " />
          <div className="d-inline">github.com/MojoDaHacker</div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </>
)

export default Sidebar



