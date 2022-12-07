import React from "react";
import "../styles/request.css"

const TransitItem = (props) => {

  return(
    <div className="request-item" onClick={props.click}>
        <img src={props.img}  alt={props.imgAltText}/>
        <div className="request-text-div">
          <p className="heading-text">{props.id}</p>
          <p className="request-source-text">To: {props.destination} </p>
        </div>
      </div>
  )
}

export default TransitItem;