import React , { useState, useEffect } from 'react'
import pic01 from '../assets/images/bannerSlideshow/pic01.jpg'
import pic02 from '../assets/images/bannerSlideshow/pic02.jpg'
import pic03 from '../assets/images/bannerSlideshow/pic03.jpg'
import pic04 from '../assets/images/bannerSlideshow/pic04.jpg'
import pic05 from '../assets/images/bannerSlideshow/pic05.jpg'
import pic06 from '../assets/images/bannerSlideshow/pic06.jpg'
import { Link as ScrollLink } from 'react-scroll'
import styled, { keyframes }from "styled-components"

const picUrl = [pic01, pic02, pic03, pic04, pic04, pic05, pic06]

const fade = keyframes`
  from {
    opacity : 0
  } to {
    opacity : 1
  }
`;

const DB = styled.section`
  animation: ${fade};
`;


const Banner = props => {
  const [pics, changePic] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      changePic(pics => {
        if(pics === 6) return 0 
        return pics + 1
      })
    }, 5000)
    return () => clearInterval(interval);
  }, [])

  return (
    <DB id="banner" style={{backgroundImage: `url(${picUrl[pics]})`}}> 
      <div className="content">
        <header>
          <h2>If it's the Keys you want, It's the Keys I got.</h2>
        </header>
      </div>
      <ScrollLink
        to="one"
        className="goto-next"
        activeClass="active"
        smooth={true}
        offset={50}
        duration={1500}
        spy={true}
      >
        Next
      </ScrollLink>
    </DB>
  )  
}

export default Banner
