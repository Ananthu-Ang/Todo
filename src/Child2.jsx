import React, { useRef } from 'react'



function Child2(props) {

  const pRef = useRef()
  const handleSetValue = ()=>{
    pRef.current.textContent=" sample"
  }


  return (
    <div>
      <p ref={pRef}>Output:{props.result}</p>
      <button onClick={handleSetValue}>setvalue</button>
    </div>
  )
}

export default Child2
