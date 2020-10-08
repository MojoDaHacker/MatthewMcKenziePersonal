import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function(props) {

  const houseType = ['Single Family', 'Condo', 'Commercial', 'Land', 'Rentals',
  'Income', 'Villa', 'Townhouse', 'Pending'];

  const beds = [1,2,3,4,5]
  const baths = [1,2,3,4,5]

  return ( 
    <Form className="mt-5">
      <Form.Row>
        <Form.Group>
          <Form.Control type="text" placeholder="City, Zip, MLS#, or Addr" />
        </Form.Group>
        <Form.Group>
          <Form.Control as="select" placeholder="Single Family">
            {houseType.map(val => <option>{val}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group>  
          <Form.Control as="select" placeholder="Single Family">
            {beds.map(val => <option>{val}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group>  
          <Form.Control as="select" placeholder="Single Family">
            {baths.map(val => <option>{val}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group> 
          <Form.Control type="text" placeholder="Min" />
        </Form.Group>
        <Form.Group>  
          <Form.Control type="text" placeholder="Max" />
        </Form.Group>
      </Form.Row>
        <Button type="submit">Search</Button>
    </Form>
  )
}