import React, {useRef, useEffect} from 'react'
import paper, {Raster, Point, Symbol} from 'paper/dist/paper-core'

const SVGBackgroundAnimation = props => {
  const bgRef = useRef(false)
  
  const houseCanvas = () => {
    const Paper =  new paper.PaperScope()
    if(Paper.project == null) Paper.setup(bgRef.current)
    
    const image = new Image();
    image.src = props.img
    
    image.onload = () => {
      const SVG = new Raster(image);
      const canvasWidth = SVG.view.size.width
      const canvasHeight = SVG.view.size.height
      
      const SVGsymbol = new Symbol(SVG);
      SVGsymbol.definition.opacity = .2;
      SVGsymbol.definition.scaling = 2;
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 4; y++) {
          const placedSymbol = SVGsymbol.place(new Point((canvasWidth / 5) * x + (canvasWidth * .1), (canvasHeight / 4) * y + (canvasHeight * .1)))
          placedSymbol.onFrame = e => {
            placedSymbol.rotate(Math.random() * 3)
          }
        }
      }
    }
  }
  
  useEffect(() => {
    houseCanvas()
  }, [])
  

  return (
    <canvas ref={bgRef} width={typeof window !== 'undefined' && window.innerWidth} height={typeof window !== 'undefined' && window.innerHeight}></canvas>
  )
}

export default SVGBackgroundAnimation