import React, { useContext } from 'react'
import Child from './Child'
import { myContext } from './App';


 
function Props() {

  // const {first} = useContext(myContext)
  console.log("from props");

  // console.log(result);
    // const result="Props Example"
//     conscont image="https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022-1160x653.jpg"
//     const imgalt="This is a image"
  return (
    <div>
      {/* <Child message={result}/>
      <Child src={image} alt={imgalt}/> */
      
      // <Child/>
      
      }
      {/* <p>{first}</p>
      <button onClick={()=>setfirst("newData")}>changeFIrst</button> */}
    </div>
  )
}

export default Props
