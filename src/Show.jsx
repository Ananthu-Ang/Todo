import React, { useState } from "react";
import "./Show.css";

function Show() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [ErrName, setErrName] = useState("");
  const [ErrPhone, setErrPhone] = useState("");
  const [ErrMail, setErrMail] = useState("");
  const [ErrPass, setErrPass] = useState("");
  const [ErrCpass, setErrCpass] = useState("");

const [formValues, setFormValues] = useState({
  name:"",
  phone:"",
  mail:'',
  pass:"",
  cpass:""
})

// const handleChange =(e)=>{
//   const {name,value} = e.target
//   setFormValues({...formValues,[name]:value})
// }

  function handleClick(event) {
    event.preventDefault(); // Prevent the form from submitting

    const nameRegExp = /^[A-Za-z\s]+$/;
    const phoneRegExp = /^[0-9]{10}$/;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const validateInputs = () => {
      if (!nameRegExp.test(name)) {
        setErrName("Invalid name. Name should contain only letters and spaces.");
        return false;
      }
      else(
        setErrName("")
      )
      if (!phoneRegExp.test(phone)) {
        setErrPhone("Invalid phone number. Phone number should be exactly 10 digits.");
        return false;
      }
      else(
        setErrName("")
      )
      if (!emailRegExp.test(mail)) {
        setErrMail("Invalid email format.");
        return false;
      }
      else(
        setErrName("")
      )
      if (!passRegExp.test(pass)) {
        setErrPass("Invalid password. Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        return false;
      }
      else{
        setErrPass("")
      }
      if (pass !== cpass) {
        setErrCpass("Passwords do not match.");
        return false;
      }
      else(
        setErrName("")
      )
      return true;
    };

    if (validateInputs()) {
      alert("All inputs are valid!");
      // Perform the form submission or other logic here
    }
  }

  return (
    <form>
      <h2><b>Registration Form</b></h2>
      <div className="name">
        <label htmlFor="name">Name:</label>
        <input
        name="username"
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(x) => setName(x.target.value)}
          // onChange={(e)=>handleChange(e)}
        />
        {ErrName?<p>{ErrName}</p>:""}
      </div>
      <div className="phn">
        <label htmlFor="phone">Phone: </label>
        <input
        name="phone"
          type="text"
          id="phone"
          placeholder="Phone number"
          value={phone}
          onChange={(x) => setPhone(x.target.value)}
        />
        {ErrPhone?<p>{ErrPhone}</p>:""}
      </div>
      <div className="mail">
        <label htmlFor="mail">Mail: </label>
        <input
        name="email"
          type="text"
          id="mail"
          placeholder="E-mail"
          value={mail}
          onChange={(x) => setMail(x.target.value)}
        />
        {ErrMail?<p>{ErrMail}</p>:""}
      </div>
      <div className="pass">
        <label htmlFor="pass">Password: </label>
        <input
        name="password"
          type="password"
          id="pass"
          placeholder="Enter a password"
          value={pass}
          onChange={(x) => setPass(x.target.value)}
        />
        {ErrPass?<p>{ErrPass}</p>:""}
      </div>
      <div className="cpass">
        <label htmlFor="cpass">Confirm Password: </label>
        <input
        name="cpassword"
          type="password"
          id="cpass"
          placeholder="Confirm your password"
          value={cpass}
          onChange={(x) => setCpass(x.target.value)}
        />
        {ErrCpass?<p>{ErrCpass}</p>:""}
      </div>
      <div className="btn" align="center">
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Show;
