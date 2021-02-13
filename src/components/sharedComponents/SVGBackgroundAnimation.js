import React, {useRef, useEffect} from 'react'
import Paper, {Raster, Point, Size, Symbol} from 'paper/dist/paper-core'


//create image from dataURI from props
//set Ref for canvas
//once siblingHeight(neede to match height of sibling) is set and image is loaded
//  run draw functions



const SVGBackgroundAnimation = props => {
  const bgRef = useRef(false)
  
  const initCanvas = () => {
    const canvas = bgRef.current
    if(Paper.project == null) Paper.setup(canvas)
    
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
    initCanvas()
  },[])
  

  return (
    <canvas ref={bgRef} className={props.className} width={window.innerWidth} height={window.innerHeight}>

    </canvas>
  )
}

export default SVGBackgroundAnimation