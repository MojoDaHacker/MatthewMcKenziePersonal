import React from 'react'
import { Container as Cont, Row, Col, Image} from 'react-bootstrap'
import { ChatFill, DoorOpenFill, CashStack, CalendarCheckFill, CardChecklist, PeopleFill} from 'react-bootstrap-icons'
import Fade from 'react-reveal/Fade'

const Four = props => (
  
  <Fade up>
    <Cont className="vh-100 flex-column d-flex justify-content-center text-center">
      <Row className="h-25">
        <Col>
          <ChatFill />
          <h3>Never Miss  A Call</h3>
          <p>As our client, you call we pick up. No ifs or buts. We take your business very seriously.</p>
        </Col>
        <Col>
          <DoorOpenFill  />
          <h3>Find Your Best Home</h3>
          <p>Whether it's a single family residence, condo, townhome, or investment property.Find the best home that meet your needs.</p>
        </Col>
        <Col>
          <CashStack  />
          <h3>Get The Best Deal</h3>
          <p>With our appraisers, squeeze the most dollars out of your home.</p>
        </Col>
      </Row>
      <Row className="h-25">
        <Col>
          <CalendarCheckFill  />
          <h3>Quick and Fast</h3>
          <p>Get your sale completed in record breaking time, to get you enjoying your home in the fastest way possible.</p>
        </Col>
        <Col>
          <PeopleFill  /> 
          <h3>Be Apart Of A Team</h3>
          <p>With an eXP Agent, you get more than just the agent. You get introduced to the mortgage broker, title escrow company and more.
             This way you are more involved throughout the whole process.</p>
        </Col>
        <Col>
          <CardChecklist  />
          <h3>The Whole Package</h3>
          <p>With our help, get great deals on moving your furniture, get the best loans, and recieving the best no-hassle service.</p>
        </Col>
      </Row>    
    </Cont>
  </Fade>

)

export default Four
