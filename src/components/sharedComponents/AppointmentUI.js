import React, { useRef, useEffect } from 'react'
import { Container as Cont, Row, Col, Button } from 'react-bootstrap'
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons'
import anime from 'animejs'
import ReactAnime from 'react-anime'
import styled from 'styled-components'

const handleControl = () => {
}

const theta = [0, Math.PI / 6, Math.PI / 3, Math.PI / 2];

const Circle = styled.div`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  `
  
  const Center = styled.div`
  border-radius: 50%;
  position: relative;
  right: 25%;
  width: 25%;
  height: 25%;
  transform: rotate(${(Math.PI / 6) * (180 / Math.PI)}deg);
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

const Appointment = props => {
  const pathRef = useRef(null);
  // const [carouselItem, changeCarouselItem] = useState(0);
  // const svgPickerPath = 
  // <svg id="pickerPath" width="600px" height="600px">
  //     <path stroke="red" ref={pathRef} fill="none" d="M 350 450 A 50 50 0 0 0 350 150" />
  //   </svg>;
  useEffect(() => {
    const path = anime.path(pathRef.current);
    // pathRef.current = anime({
    //   targets: '#pickerPath',
    //   translateX: '450px',
    //   easing: 'linear',
    //   duration: 2000,
    //   loop: true
    // })
  })

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
            <Button link="variant" className="my-3 d-block"><CaretUpFill className="d-block" size={50}/></Button>
            <Button link="variant" className="my-3 d-block"><CaretDownFill className="color-none d-block" size={50}/></Button>
          </div>
        </Col>
        <Col>
          <Circle>
            <Center>
              {items.map((val, i) => (
                <CarouselItems key={i} rotate={theta[i]} radius={150} deg={theta[i]}><p>{val}</p></CarouselItems>
              ))}
            </Center>
          </Circle>
        </Col>
        <Col>
          <div className="my-auto">
            <p>Curabitur convallis hendrerit sapien, sed maximus velit vestibulum in.
              Aliquam nisi nisi, lobortis quis ipsum eget, vulputate feugiat turpis.
              Cras eget arcu ornare, aliquam ex quis, pulvinar ex.
              Orci varius natoque penatibus et magnis dis parturient montes.
            </p>
            <Button className="mt-2">Book Now!</Button>
          </div>
        </Col>
      </Row>
    </Cont>
  )
}


export default Appointment