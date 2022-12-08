import React from "react";

import loading from "../svgFiles/loading.svg";
import "../styles/alertDialog.css"


const Alert = (props) => {

  return(
    <div 
      className="dialog-div"
      onClick={props.click}
    >
      <div className="img-div">
        <img src={loading} alt="loading- symbol" />
      </div>
      
      <div className="text-div">
        <p className="p-bold">{props.bold}</p>
        <p className="p-normal">{props.lineOne} <br />{props.lineTwo}</p>
      </div>
      
    </div>
  )
}

export default Alert;