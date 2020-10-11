import React from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'

const houseType = ['Single Family', 'Condo', 'Commercial', 'Land', 'Rentals',
'Income', 'Villa', 'Townhouse', 'Pending'];

const beds = [1,2,3,4,5]
const baths = [1,2,3,4,5]

export default function(props) {
  
  return ( 
      props.newsletter ? newsLetter : searchForm
  )
}

const searchForm = 
  <Form className="w-100">
    <Form.Row className="">
      <Form.Group as={Col}>
        <Form.Control type="text" placeholder="City, Zip, or Addr" />
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Control as="select" placeholder="Single Family">
          {houseType.map(val => <option>{val}</option>)}
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col}>  
        <Form.Control as="select" placeholder="Single Family">
          {beds.map(val => <option>{val}</option>)}
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col}>  
        <Form.Control as="select" placeholder="Single Family">
          {baths.map(val => <option>{val}</option>)}
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col}> 
        <Form.Control type="text" placeholder="Min" />
      </Form.Group>

      <Form.Group as={Col}>  
        <Form.Control type="text" placeholder="Max" />
      </Form.Group>

      <Form.Group>
        <Button type="submit">Search</Button>
      </Form.Group>
    </Form.Row>
  </Form> 
;

const newsLetter = 
  <Form className="w-50 mx-auto">
    <Row className="mt-4">
      <Form.Group as={Col}>
        <Form.Control
          aria-label="Your email"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
      </Form.Group>
      <Form.Group>
        <Button>Join Now!</Button>
      </Form.Group>
    </Row>
  </Form> 
;