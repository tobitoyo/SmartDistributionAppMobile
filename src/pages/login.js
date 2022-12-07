import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Input from "../components/input";
import Password from "../components/password-input";
import Button from "../components/button";
import "../styles/login.css"
import logo from "../svgFiles/logo.svg"




const Login = () => {

  const [states, setStates] = useState({
    driverList: [{id: "223546472525", password: "driv@!er"}, {id: "223546472524", password: "DRIV@!ER"}],
    uniqueId:"",
    password: "",
    showPassword: false,
    error: true,
    displayError: false
  })


  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    // setStates({...states, [name]:value})
    if (states.uniqueId.length === 0 || states.password.length === 0 ){
      setStates({...states, error: true, [name]:value, displayError: false})
    }
    else {
      setStates({...states, error: false, [name]:value, displayError: false})
    }
    
    console.log(states.error)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const list = states.driverList
    const driver =  list.find( driver => 
      driver.id === states.uniqueId && driver.password === states.password
    )

    if (driver){
      setStates({...states, displayError: false})
      navigate('/request', {state: {driverID: driver.id }})
    }
    else {
      setStates({...states, displayError: true})
    }  
  
  }

    
  return(
 

    <div>

      <div className="logo-div">
        <img src={logo} alt="logo"/>
      </div>
      <h1 className="login-header-text">Sign in to SDA Logistics</h1>
      <Input
        name="uniqueId"
        title="Unique ID"
        inputType="text"
        value={states.uniqueId}
        inputChange={handleInputChange}
        placeholder="Enter your ID"
        divClass="input-div"
        inputClass="input"
        labelClass="input-label"
        />

        <Password
          name="password"
          title="Password"
          inputType="password"
          value={states.password}
          inputChange={handleInputChange}
          placeholder="Enter Password"
          divClass="password"
          inputClass="input"
          labelClass="input-label"
        />

        {states.displayError &&
          <p className="error-message">Incorrect ID or Password</p>
        }

        <p className="forgot-password">Forgot Password?</p>
        

        {states.error && 
          <Button 
            className="login-btn"
            title="Log in"
          />
        }

        {!states.error && 
          <Button 
            className="scan-cancel-btn"
            title="Log in"
            btnClick={handleSubmit}
          />
        }

        <p>log in with these details</p>
        <p>id: "223546472525", password: "driv@!er"</p>
      </div>

  
  )
}

export default Login