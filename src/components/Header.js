import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import MobileMenu from './MobileMenu'

const timeoutLength = 300

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      mobileActiveClass: '',
      mouseOverButton: false,
      mouseOverMenu: false,
      mouseOverSubButton: false,
      mouseOverSubMenu: false,
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        // set the class for the mobile menu
        this.state.active
          ? this.setState({
              mobileActiveClass: 'navPanel-visible',
            })
          : this.setState({
              mobileActiveClass: '',
            })
      }
    )
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  }

  enterButton = () => {
    this.setState({ mouseOverButton: true })
  }

  leaveButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverButton: false })
    }, timeoutLength)
  }

  enterMenu = () => {
    this.setState({ mouseOverMenu: true })
  }

  leaveMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false })
    }, timeoutLength)
  }

  enterSubButton = () => {
    this.setState({ mouseOverSubButton: true })
  }

  leaveSubButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubButton: false })
    }, timeoutLength)
  }

  enterSubMenu = () => {
    this.setState({ mouseOverSubMenu: true })
  }

  leaveSubMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubMenu: false })
    }, timeoutLength)
  }

  render() {
    const siteTitle = this.props.siteTitle
    const menuLinks = this.props.menuLinks
    const open = this.state.mouseOverButton || this.state.mouseOverMenu
    const subOpen = this.state.mouseOverSubButton || this.state.mouseOverSubMenu
    console.log(menuLinks)
    return (
      <>
        {/* <div className={`navbar-menu ${this.state.mobileActiveClass}`}>
          <div id="titleBar">
            <a
              role="button"
              onClick={() => this.toggleHamburger()}
              className="toggle"
              aria-label="Open mobile menu"
            ></a>
            <span className="title">
              <Link to="/">{siteTitle}</Link>
            </span>
          </div>
          <div id="navPanel">
            <MobileMenu siteTitle={siteTitle} menuLinks={menuLinks} />
          </div>
        </div> */}

        <Navbar id="header" expand="sm" fixed="top" >
          <Navbar.Brand href="#">{`<Icon>   ${siteTitle}`}</Navbar.Brand>
            <Nav className="ml-auto">
              {menuLinks.map(link => 
                link.items ? (
                  null
                ) : (
                  <Nav.Item><Nav.Link key={link.name} href={link.link}>{link.name}</Nav.Link></Nav.Item>
                ))}
            </Nav>
        </Navbar>
      </>
    )
  }
}

export default Header
