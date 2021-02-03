import React, {useState, useRef, useEffect} from 'react'

const Bolt = props => {
  const [bolts, changeBolts] = useState([])
  const boltRef = useRef(null)

  // # When a bolt appears, it will be drawn at full opacity for the flash duration, and then will fade
  // # out gradually over the fade duration.
  var boltFlashDuration = 0.25
  var boltFadeDuration  = 0.5
  var totalBoltDuration = boltFlashDuration + boltFadeDuration
  
  useEffect(() => {
    const boltCanvas = boltRef.current
    const boltContext = boltCanvas.getContext("2d")

    boltContext.lineWidth = 2;
    boltContext.beginPath();
    boltContext.strokeStyle = 'red';
    boltContext.moveTo(75, 50);
    boltContext.lineTo(200, 100);
    boltContext.lineTo(20, 300);
    boltContext.stroke();
    
  }, [])

  return <canvas ref={boltRef} width={window.innerWidth} height={window.innerHeight}></canvas>
  // return bolts.map((val,i) => <canvas key={i} ref={boltRef} width={window.innerWidth} height={window.innerHeight}></canvas>)
}

export default Bolt