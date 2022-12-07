import React from "react";
import closeIcon from "../svgFiles/cancel.svg";
import Button from "./button";
import "../styles/deliveryDetails.css"

const DeliveryDetails = (props) => {


  return(
    <div className="delivery-detail-div">
          <div className="icons-div" onClick={props.handleCancel}>
            <img src={closeIcon} alt="close delivery details" className="plus-img icon-img"/>
          </div>

          <h1 className="scan-header-text">Delivery Details</h1>
          
          <div className="track-num-date-div">
            <div>
              <h3 className="track-num-date">Tracking Number</h3>
              <p className="detail-paragraph" >{props.trackNum}</p>
            </div>
            <div>
              <h3 className="track-num-date">Delivery date</h3>
              <p className="detail-paragraph" >{props.deliveryDate}</p>
            </div>
          </div>

          <div className="details">
            <h3 className="detail-heading">DESTINATION DETAILS</h3>
            <div>  
              <h3 className="detail-subhead">Delivery Address</h3>
              <p className="detail-paragraph" >{props.deliveryAddress}</p>
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
            <h3 className="detail-heading">PICKUP DETAILS</h3>
            <div>  
              <h3 className="detail-subhead">Pickup point</h3>
              <p className="detail-paragraph" >{props.pickupPoint}</p>
            </div>
            <div className="detail-grid">
              <div>  
                <h3 className="detail-subhead">Sender Name</h3>
                <p className="detail-paragraph" >{props.senderName}</p>
              </div>
              <div>  
                <h3 className="detail-subhead">Sender Contact</h3>
                <p className="detail-paragraph" >{props.senderContact}</p>
              </div>
            </div>
            <h3 className="detail-heading">PACKAGE DETAILS</h3>

            <div>  
              <h3 className="detail-subhead">Content of Package</h3>
              <p className="detail-paragraph" >{props.packageContent}</p>
            </div>
          </div>

          <div className="pickup-details"></div>

          <Button
            title={props.btnTitle}
            className="scan-cancel-btn"
            btnClick={props.handleSubmit}
          />

        </div>
  )
}

export default DeliveryDetails;