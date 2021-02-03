import React, {useRef, useEffect} from 'react'
import Bolt from './LightningBolt'

const LightingBoltCanvas = props => {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const canvasRef = useRef(null)

  useEffect(() => {
    
    draw(
      Math.floor(Math.random() * windowWidth),
      Math.floor(Math.random() * windowHeight),
      Math.floor(Math.random() * ((windowWidth * .75) - (windowWidth * .25) + (windowWidth + .25))),
      0
    )
    
  }, [])

  const randomize = (min, max, n = 1) => {
    var i = 0;
    
    min = Math.ceil(min);
    max = Math.floor(max);
    if(n > 1){
      var arr = [];
      while(i < n) {
        arr.push(Math.floor(Math.random() * (max - min) + min))
        i++;
      }
    } else {
      return Math.floor(Math.random() * (max - min) + min)
    }
    return arr
  }

  const draw = (startX, startY, len, ang) => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    
    var lineToX;
    var lineToY;
    
    if(startX < Math.floor(windowWidth * .25)) lineToX = randomize(windowWidth * .25, windowWidth - len);
    else if(startX > Math.floor(windowWidth * .75)) lineToX = -(randomize(0, (windowWidth * .75) - len));
    else lineToX = randomize(0, windowWidth - len);
    
    if(startY < Math.floor(windowHeight * .25)) lineToY = randomize(windowHeight * .25, windowHeight - len);
    else if(startY < Math.floor(windowHeight * .75)) lineToY = -(randomize(0, (windowHeight * .75) - len));
    else lineToY = randomize(0, windowHeight - len);
    
    
    console.log(startX + " start X")
    console.log(startY + " start Y")
    console.log(lineToX + " line X")
    console.log(lineToY + " line Y")
    
    context.lineWidth = 4;
    context.strokeStyle = "blue";
    
    context.beginPath()
    context.translate(startX, startY)
    context.moveTo(0, 0)
    context.lineTo(lineToX, lineToY)
    context.stroke()
    
    
    console.log(len)
    console.log(windowWidth * .1)
    if(len < windowWidth * .1) return
    
    draw(lineToX, lineToY, Math.floor(randomize(0, len - Math.floor(windowWidth * .20))))
  }
  
  return (
    <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} {...props}>
      {/* <Bolt /> */}
    </canvas>
  )
}

export default LightingBoltCanvas