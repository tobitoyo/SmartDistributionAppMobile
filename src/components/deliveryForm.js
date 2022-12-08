import React, {useState} from "react";
import closeIcon from "../svgFiles/cancel.svg";
import Input from "./input";
import Button from "./button";
import "../styles/deliveryDetails.css"



const DeliveryForm = (props) => {

  const [states, setStates] = useState({
    deliveryCode: ""
  })





  return(
    <div className="package-transfer-div">
      

      <div >
        <div className="icons-div" onClick={props.handleCancel}>
          <img src={closeIcon} alt="close delivery details" className="plus-img icon-img"/>
        </div> 

        <h1 className="scan-header-text">Confirm Delivery</h1> 
        <p className="scan-header-subtext package-transfer-subhead">Tell the receiver to input the delivery code</p>

        <Input
          name="deliveryCode"
          title="Delivery Code"
          inputType="text"
          value={props.deliveryCode}
          inputChange={props.inputChange}
          placeholder="XXX-XXX-XXX"
          divClass="input-div"
          inputClass="input"
          labelClass="input-label"
        />

        {props.error &&
          <p className="error">Incorrect delivery code for this package</p>
        }

        {!props.error && 
          <div className="details">
            <h3 className="detail-heading">RECEIVER DETAILS</h3>
            
            <div className="detail-grid">
              <div>  
                <h3 className="detail-subhead">Name</h3>
                <p className="detail-paragraph" >{props.receiverName}</p>
              </div>
              <div>  
                <h3 className="detail-subhead">Gender</h3>
                <p className="detail-paragraph" >{props.receiverGender}</p>
              </div>
            </div>
            <div>  
              <h3 className="detail-subhead">Contact</h3>
              <div className="detail-grid">
                <p className="detail-paragraph" >{props.receiverPhone}</p>
                <p className="detail-paragraph" >{props.receiverEmail}</p>
              </div>
            </div>
          </div>
        }

      </div>

      {props.error &&
        <Button 
          className="login-btn"
          title="Submit"
        />
      } 

      {!props.error &&
        <Button 
          className="scan-cancel-btn"
          title="Submit"
          btnClick={props.handleSubmit}
        />
      }     

    </div>
  )
}


export default DeliveryForm;