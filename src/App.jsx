import { useState } from 'react'
import './App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function App() {

  const [circle, setCircle] = useState(0)
  const random = gsap.utils.random(-500 , 500 , 100)

  useGSAP (() => {
    gsap.to (".circle" , {
      x:circle,
      // y: circle,
      duration: 0.5
    })
  }, [circle])

  return (
    <>
      <main>
        <button onClick={() => { setCircle(random); console.log(circle);
        
        }}>Animate</button>
        <div className="circle"></div>
      </main>
    </>
  )
}

export default App
