import { createContext, useState } from "react";
import "./App.css";
import Body from "./Body/Body";
import Child from "./Child";
import Footer from "./Footer/Footer";
import Header from "./Headers/Header";
import Props from "./Props";
import Show from "./Show";
import Todo from "./Todo";
import Useeffectex from "./Useeffectex";
import Useeffectex2 from "./Useeffectex2";
import { UseProvider } from "./Usercontext";
import Todo2 from "./Todo2";
import { Route,Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
// import img from "./clg.jpg";

// export const myContext = createContext()

function App() {
  // const [first, setfirst] = useState("data")

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo2/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
