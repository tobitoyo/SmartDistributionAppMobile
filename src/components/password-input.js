import React, {useState} from 'react';
import eye from "../svgFiles/password-eye.svg"
import "../styles/input.css";

const Password = (props) => {

  const [states, setStates] = useState({
    type: "password"
  })

  const handleShowPassword = (e) => {
    if(states.type === "password"){
      setStates({...states, type: "text"})
    }
    else{
      setStates({...states, type: "password"})
    }
  }

  return (
    <div>
        <label 
          htmlFor={props.name} 
          className={props.labelClass}
          > 
          {props.title}
        </label >
            
          <div className={props.divClass}>
            <input 
                name={props.name} 
                type={states.type} 
                value={props.value} 
                onChange={props.inputChange}
                placeholder={props.placeholder} 
                className={props.inputClass}
            />
            <img 
              src={eye} 
              className="eye" 
              onClick={handleShowPassword} 
            />
          </div>
    </div>
  )
}

export default Password;