import axios from "axios";
import React, { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/posts";

function Useeffectex() {

  const [api, setapi] = useState("");
  const [post, setPosts] = useState([]);

  useEffect(()=>{
axios.get(API).then((res)=>{
  setPosts(res.data)
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
  },[])

  useEffect(() => {
    axios.get(`${API}`).then((response) => {
      console.log(response.data, "OutPut here");
      setapi(response.data);
    });
  }, []);
  function create() {
    axios.post(API, {
      title:"AXIOS" , 
      body: "New Created"
    })
    .then(response1 =>{
    setapi(response1.data);
    });
  }
  function update(){
    axios.put(`${API}/2`,{
    title:"AXIOS",
    body:"Updated One"
    })
     .then(response2 =>{
     setapi(response2.data) 
    }); 
  }
  function Del(){
    axios.delete(`${API}/2`,{
    })
    .then(response3 =>{
      alert("Deleted Successfully")
      setapi('')
    });
  }
  return (
    <div>
        <h1>AXIOS Example</h1>
        <h1>{api.title}</h1>
        <h1>{api.body} </h1>
        {/* <h1>{api}</h1> */}
{post.map((ele)=><p key={ele.id}>{ele.title}</p>
)}
        
      <button onClick={create}>Create</button><br></br>
      <button onClick={update}>Update</button><br></br>
      <button onClick={Del}>Delete</button>
      
    </div>
  );
}

export default Useeffectex;
