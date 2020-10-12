import React from 'react'
import { Container as Cont, Row, Col, Button, Card,
          ListGroup } from 'react-bootstrap'



const Appointment = props => (
  <Card>
    <Cont className="pl-5" fluid>
      <Row className="pb-3">
        <h1> Book Appointments Via Zoom</h1>
      </Row>
      <ListGroup variant="flush" className="pb-5">
        <ListGroup.Item>
          <Row>
            <Col xs={9}>
              <h3> Appointments for Home Listing Consultation</h3>
              <p>Listing a house isn't hard, any agent could put your house on the MLS
              Usually people hire agents to skip the hassle of wasting time on unqualified buyers
              negotiating with other agents, and most importantly getting the best price for your home.</p>
            </Col>
            <Col xs={3}>
              <Button>Book Appointment</Button>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={9}>
              <h3> Appointments for Home Buying Consultation</h3>
              <p>Buying a home is probably the most important process you will go through in your life.
              As your representing agent, my responsibilty would be to guide you to your best choice of home,
              avoiding pitfalls and scams such as Title Scams, Undisclosed Costs, and Interest Rate surprises.</p>
            </Col>
            <Col xs={3}>
              <Button>Book Appointment</Button>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={9}>
              <h3> Appointments for Real Estate Management Consultation</h3>
              <p>If you currently own or are considering buying a rental, and you need some help to manage it.
              Successful management of your real estate requires skillful stewardship of the physical space, tenant
              relationships and your reputation in the marketplace. By partnering with us at EXP, you will have the attention
              of best-in-class advisors who will manage the ever-changing needs of your property to maximize value and tenant
              retention, freeing you up to focus on your business.</p>
            </Col>
            <Col xs={3}>
              <Button>Book Appointment</Button>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={9}>
              <h3> Appointments for Real Estate Investing Consultation</h3>
              <p>Whether you are determining if real estate investing is for you, just getting started with your first investment
              property or deciding to buy or sell a property, we offer real estate consultation services to help you move forward.
              Our experience, expertise and professional network allow us to provide you with in-depth analyses and strategy to 
              customize an investment plan tailored to your needs. </p>
            </Col>
            <Col xs={3}>
              <Button>Book Appointment</Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Cont>
  </Card>
)


export default Appointment