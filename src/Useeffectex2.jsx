// import React,{useEffect,useState} from "react";

// function Useeffectex2() {
//     const [Data,setData]=useState("[]");
//     const [Loading,SetLoading]=useState(true);

//     useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//           .then((response) => response.json())
//           .then((data) => {
//               setData(data);
//               SetLoading(false);
//           });
//   }, []);

//   if (Loading) {
//       return <p>Loading...</p>;
//   }   
//   return (
//      <div>
//            {<h2>Data List</h2>} 
//             <ul>
//                 {Data.map((item) => (
//                     <li key={item.id}>{item.title}</li>
//                 ))}
//             </ul>
//         </div>
//   )
// }

// export default Useeffectex2 
import React, { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`The count is now ${count}`);
    }, [count]); // Effect runs every time 'count' changes

    return (
        <div>
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default Counter;

