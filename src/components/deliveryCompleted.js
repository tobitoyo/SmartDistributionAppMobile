import React from "react";
import closeIcon from "../svgFiles/cancel.svg";
import success from "../svgFiles/success.svg"
import Button from "./button";
import "../styles/deliveryDetails.css"

const DeliveryCompleted = (props) => {


  return(
    <div className="delivery-detail-div">
          <div className="icons-div" onClick={props.handleCancel}>
            <img src={closeIcon} alt="close delivery details" className="plus-img icon-img"/>
          </div>

          <div className="success-head">
            <img src={success} alt="success" className="success-img"/>
            <h1 className="scan-header-text">Delivery Completed</h1>
          </div>

          <div className="track-num-date-div">
            <div>
              <h3 className="track-num-date-time">Tracking Number</h3>
              <p className="detail-paragraph" >{props.trackNum}</p>
            </div>
            <div>
              <h3 className="track-num-date-time">Delivery date</h3>
              <p className="detail-paragraph" >{props.deliveryDate}</p>
            </div>
            <div>
              <h3 className="track-num-date-time">Time</h3>
              <p className="detail-paragraph" >{props.deliveryTime}</p>
            </div>
          </div>

          <div className="request-stat-div">
                <p className="request-stat" >Request Status</p>
                <p className="request-stat-background" >Delivered</p>
          </div>

          <div className="details">
            <h3 className="detail-heading">REQUEST DETAILS</h3>
            <div>  
              <h3 className="detail-subhead">From</h3>
              <p className="detail-paragraph" >{props.pickupPoint}</p>
            </div>
            <div>  
              <h3 className="detail-subhead">To</h3>
              <p className="detail-paragraph" >{props.deliveryAddress}</p>
            </div>
            <div>  
                <h3 className="detail-subhead">Transfer Location</h3>
                <p className="detail-paragraph" >{props.transferLocation}</p>
              </div>
            <div className="detail-grid">
              <div>  
                <h3 className="detail-subhead">Receiver Name</h3>
                <p className="detail-paragraph" >{props.receiverName}</p>
              </div>
              <div>  
                <h3 className="detail-subhead">Receiver Gender</h3>
                <p className="detail-paragraph" >{props.receiverGender}</p>
              </div>
            </div>
            <div>  
              <h3 className="detail-subhead">Receiver Contact</h3>
              <div className="detail-grid">
                <p className="detail-paragraph" >{props.receiverPhone}</p>
                <p className="detail-paragraph" >{props.receiverEmail}</p>
              </div>
            </div>
            
          </div>

        

    

        </div>
  )
}

export default DeliveryCompleted;