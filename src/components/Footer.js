import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { ImTwitter, ImFacebook, ImInstagram, ImGoogle, ImLinkedin } from 'react-icons/im'

const socialHandles = [<ImTwitter/>, <ImFacebook/>, <ImInstagram/>, <ImGoogle/>, <ImLinkedin/>]

const Footer = props => (
  <footer id="footer">
    <IconContext.Provider value={{ color: "navy", className: "global-class-name" }}>
      <Navbar>
        <Nav className="mx-auto">
          {socialHandles.map(icon => (
            <Nav.Item><Nav.Link href="#" key={icon.name}>{icon}</Nav.Link></Nav.Item>
          ))}
        </Nav>
      </Navbar>
      <Navbar className="w-100 mx-auto copyright" variant="flush" horizontal>
        <Nav className="mx-auto">
          <Nav.Item className="mr-3"><Navbar.Text>&copy; Untitled. All rights reserved.</Navbar.Text></Nav.Item>
          <Nav.Item><Navbar.Text>Demo Images: <a href="https://unsplash.com">Unsplash</a></Navbar.Text></Nav.Item>
        </Nav>
      </Navbar>
    </IconContext.Provider>
  </footer>
)

export default Footer
