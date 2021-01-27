import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import { motion } from 'framer-motion'

const StyledProgress = styled.div.attrs(props => ({
  className: props.className
}))`

`
const fill = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
`;
const ProgressBall = styled.div.attrs(props => ({
  className: props.className
}))`
  width: 25px;
  height: 25px;
  // left: -5px;

  &::after{
    content: " ";
    position: absolute;
    background-color: green;
    animation: ${fill} 2s linear infinite;
  }


`


const Progress = props => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const renderBalls = (num) => {
    var render = [];
    for (let index = 0; index < num; index++) {
      render.push(<motion.div transition={{duration: .5, delay: index * .5}} animate={{x: index / 5 * 100 + "%"}}><ProgressBall className="bg-secondary position-absolute rounded-circle" /></motion.div>)
    }
    return render
  }

  return (
    <StyledProgress className="w-100">
      <motion.div className="position-relative" animate="show" initial="hidden" variants={container}>
        {renderBalls(props.num)}
      </motion.div>
    </StyledProgress>
  )
}

export default Progress