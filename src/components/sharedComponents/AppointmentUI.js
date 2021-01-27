import React, { useRef, useState } from 'react'
import { Container as Cont, Row, Col, Button } from 'react-bootstrap'
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons'
import Anime from 'react-anime'
import styled from 'styled-components'

const theta = [0, Math.PI / 6, Math.PI / 3, Math.PI / 2];

const Circle = styled.div`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  position: relative;
  right: 20%;
  top: 0%;
  `
const Center = styled.div`
  border-radius: 50%;
  height: 25%;
  // transform: rotate(${(Math.PI / 6) * (180 / Math.PI)}deg);
  font-family: vag-rundschrift-d, sans-serif;
  font-weight: 400;
  font-style: normal;
`
const CarouselItems = styled.div`
  white-space: nowrap;
  overflow: visible;
  position: absolute;
  bottom: ${props => Math.round(props.radius * Math.sin(props.deg))}px;
  left: ${props => Math.round(props.radius * Math.cos(props.deg))}px;
  transform-origin: top left;
  transform: rotate(-${props => { return props.rotate * (180 / Math.PI)}}deg)
  `
const investMessage = "Real estate has become a popular investment vehicle over \
  the last 50 years or so. Hear some of the leading options for individual \
  investors, along with the reasons to invest."

const rentalMessage = "One of the biggest decisions you'll make as a landlord \
  is whether you should hire a property management company. Many landlords manage \
  properties on their own or with the help of an employee, such as a resident manager. \
  But sometimes landlords need more help, and that's when a property management company might make sense."

const buyingMessage = "Buying a home can be challenging for a first-timer. After all, \
  there are so many steps, tasks, and requirements, and you may be anxious about making \
  an expensive mistake. Learn some of the special advantages \
  created to encourage buyers into the real estate market."

const sellingMessage = "Most home sellers dream of a stress-free sale where they \
  simply list their house, quickly find a qualified buyer, collect the cash and hand \
  over the keys. The reality is that selling a home includes many moving parts — some \
  which you can control and some that are out of your hands."

const messages = [buyingMessage, sellingMessage, rentalMessage, investMessage]

const Appointment = props => {
  const [activeButton, changeButton] = useState(1);
  const items = [
    'Home Buying',
    'Home Listing',
    'Rental Management',
    'Real Estate Investing'
  ]

  return (
    <Cont className="pl-5 p-4 appointmentUI" fluid>
      <Row className="pb-3">
        <h1> Book Appointments Via Zoom</h1>
      </Row>
      <Row className="text-center overflow-hidden">
        <Col className="my-auto" xs="auto">
          <div className="d-inline-block">
            <Button link="variant" onClick={() => changeButton(activeButton - 1)} className="my-3 d-block"><CaretUpFill className="d-block" size={50}/></Button>
            <Button link="variant" onClick={() => changeButton(activeButton + 1)} className="my-3 d-block"><CaretDownFill className="color-none d-block" size={50}/></Button>
          </div>
        </Col>
        <Col xs="auto">
          <Circle>
            <Anime easing="linear" duration={500} rotate={() => (theta[activeButton]) * (180 / Math.PI)}>
              <Center>
                {items.map((val, i) => (
                  <CarouselItems key={i} rotate={theta[i]} radius={150} deg={theta[i]}><p>{val}</p></CarouselItems>
                ))}
              </Center>
            </Anime>
          </Circle>
        </Col>
        <Col>
          <div className=" h-100 my-auto">
            <p>
              {messages[activeButton]}
            </p>
            <Button className="mt-2">Book Now!</Button>
          </div>
        </Col>
      </Row>
    </Cont>
  )
}


export default Appointment
