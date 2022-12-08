import React from "react";
import requestItem from "../svgFiles/question.svg"
import "../styles/request.css"

const RequestItem = (props) => {

  return(
    <div className="request-item" onClick={props.click}>
        <img src={requestItem}  alt="pickup or transfer request"/>
        <div className="request-text-div">
          <p className="heading-text">{props.type} Request</p>
          <p className="request-source-text">From: {props.source} </p>
        </div>
      </div>
  )
}

export default RequestItem;