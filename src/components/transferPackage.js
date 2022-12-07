import React from "react";
import closeIcon from "../svgFiles/cancel.svg";
import Input from "./input";
import Button from "./button";
import "../styles/deliveryDetails.css"



const PackageTransfer = (props) => {

  return(
    <div className="package-transfer-div">
      

      <div >
        <div className="icons-div" onClick={props.handleCancel}>
          <img src={closeIcon} alt="close delivery details" className="plus-img icon-img"/>
        </div> 

        <h1 className="scan-header-text">Package Transfer</h1> 
        <p className="scan-header-subtext package-transfer-subhead">Enter Driver’s Unique ID to transfer this Package</p>

        <Input
          name="transferDriverID"
          title="Driver's Unique ID"
          inputType="text"
          value={props.transferDriverID}
          inputChange={props.inputChange}
          placeholder="XXX-XXX-XXX"
          divClass="input-div"
          inputClass="input"
          labelClass="input-label"
        />

        {props.driverError &&
          <p className="error">Incorrect driver ID</p>
        }
        
      </div>



        {props.error && 
          <Button 
            className="login-btn"
            title="Send Request"
          />
        }

        {!props.error && 
          <Button 
            className="scan-cancel-btn"
            title="Send Request"
            btnClick={props.handleSubmit}
          />
        }

    </div>
  )
}


export default PackageTransfer;