import React, {useRef, useEffect, useState} from 'react'
import paper, {Path, Point} from 'paper/dist/paper-core'

const Canvas = () => {
  const canvasRef = useRef(null)

  const drawLightning = () => {
    const Paper = new paper.PaperScope()
    if(Paper.project == null) Paper.setup(canvasRef.current)



  }

  useEffect(() => {
    drawLightning()
  })

  
  return (
    <canvas ref={canvasRef} className="vh-100 border border-primary p-3"></canvas>
  )
}

export default Canvas