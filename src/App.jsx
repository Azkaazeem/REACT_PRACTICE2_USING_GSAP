import { useGSAP } from '@gsap/react'
import './App.css'
import gsap from 'gsap'
import { useRef } from 'react'

function App() {

  // const boxRef = useRef();
  const container = useRef();

  useGSAP( () => {
    gsap.from(".box" , {
        y: 300,
        opacity: 0,
        rotate: 360,
        duration: 0.8,
        delay: 1
    })
  } , {scope: container} )

  return (
    <>
      <main>

        <div ref={container} className="container">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
        <div className="container2">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
      </main>
    </>
  )
}

export default App
