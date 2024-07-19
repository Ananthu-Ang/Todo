import React from 'react'
import Child1 from './Child1'

function Child(props) {
    console.log("from child");
  return (
    <div>
      {/* <p>{props.message}</p>    
      <img src={props.src} alt={props.alt}/> */}
      <Child1 />
    </div>
  )
}

export default Child
