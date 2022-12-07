
import React, { useEffect, useState } from "react";
import RequestItem from "../components/requestItem";
import TransitItem from "../components/transitItem";
import DeliveryDetails from "../components/deliveryDetails";
import TransitDeliveryDetails from "../components/transitItemDetails";
import PackageTransfer from "../components/transferPackage";
import DeliveryForm from "../components/deliveryForm";
import DeliveryCompleted from "../components/deliveryCompleted";
import Alert from "../components/alertDialog";
import Button from "../components/button";
import leftArrow from "../svgFiles/left-icon.svg";
import addIcon from "../svgFiles/plus-icon.svg";
import closeIcon from "../svgFiles/cancel.svg";
import transitIcon from "../svgFiles/transit-icon.svg"
import deliveredIcon from "../svgFiles/question.svg"
import scanImg from "../images/scannerImg.png"
import "../styles/request.css"
import { useLocation } from "react-router-dom";



const Request = () => {

  const [states, setStates] = useState({
    requestList: [
      {id:"#23415367221", type: "Pickup", source: "Warehouse Admin", destination: "Akure", deliveryDate: "10/30/2022", deliveryAddress: "Roadblock garage, Akure", receiverName: "Folakemi Olayemi", receiverGender:"Female", receiverPhone: "+234 815 6322 1716", receiverEmail: "folakemi@gmail.com",pickupPoint: "Pipe Junction, Ilorin", senderName: "Chika Ebube", senderContact: "+234 815 6322 1716", packageContent: "Fabric", driverCode: "223546472525", deliveryCode: "234563987" },
      {id:"#23415367222", type: "Transfer", source: "James Gabriel", destination: "Benin", deliveryDate: "10/31/2022", deliveryAddress: "Roadblock garage, Benin", receiverName: "Fola Olayemi", receiverGender:"Male", receiverPhone: "+234 815 1234 1716", receiverEmail: "fola@gmail.com",pickupPoint: "Junction, Benin", senderName: "Chukwa Ebube", senderContact: "+234 815 6322 1716", packageContent: "React",  driverCode: "223546472525", deliveryCode: "234563978" },
      {id:"#23415367223", type: "Pickup", source: "Warehouse Admin", destination: "Akure", deliveryDate: "10/31/2022", deliveryAddress: "Roadblock garage, Akure", receiverName: "Temi Olayemi", receiverGender:"Female", receiverPhone: "+234 823 4522 1716", receiverEmail: "temi@gmail.com",pickupPoint: "Pipe Busstop, Owo", senderName: "Ebube Yemi", senderContact: "+234 815 6322 1716", packageContent: "Fabric", driverCode: "223546472524", deliveryCode: "234563988" },
      {id:"#22445678676", type: "Transit", source: "Warehouse Admin", destination: "Akure", deliveryDate: "10/31/2022", deliveryAddress: "Roadblock garage, Akure", receiverName: "Folakemi Olayemi", receiverGender:"Female", receiverPhone: "+234 815 6322 1716", receiverEmail: "folakemi@gmail.com",pickupPoint: "Pipe Junction, Ilorin", senderName: "Chika Ebube", senderContact: "+234 815 6322 1716", packageContent: "Fabric", driverCode: "223546472524", deliveryCode: "234563997" },
      {id:"#12345673257", type: "Transit", source: "Warehouse Admin", destination: "Abuja", deliveryDate: "10/31/2022", deliveryAddress: "Roadblock garage, Abuja", receiverName: "Yemi Olafemi", receiverGender:"Memale", receiverPhone: "+234 823 4522 1716", receiverEmail: "temi@gmail.com",pickupPoint: "Kubwa, Abuja", senderName: "Ebube Femi", senderContact: "+234 815 6322 1716", packageContent: "Carpets", driverCode: "223546472525", deliveryCode: "234563897"},
      {id:"#12345673258", type: "Transit", source: "Warehouse Admin", destination: "Osun", deliveryDate: "10/31/2022", deliveryAddress: "Roadblock garage, Osun", receiverName: "Temi Ola", receiverGender:"Female", receiverPhone: "+234 823 4522 1716", receiverEmail: "temi@gmail.com",pickupPoint: "Pipe Busstop, Owo", senderName: "Ebube Yemi", senderContact: "+234 815 6322 1716", packageContent: "Fabric", driverCode: "223546472525", deliveryCode: "234563787"},
      {id:"#12345673278", type: "Delivered", source: "Warehouse Admin", destination: "Lagos", deliveryDate: "10/31/2022", deliveryAddress: "Roadblock garage, Lagos", receiverName: "Temi James", receiverGender:"Female", receiverPhone: "+234 823 4522 1716", receiverEmail: "james@gmail.com",pickupPoint: "Pipe Busstop, Owo", senderName: "James Yemi", senderContact: "+234 815 6322 1716", packageContent: "Fabric", driverCode: "223546472524", deliveryCode: "234563887"},
      {id:"#12345673279", type: "Delivered", source: "Warehouse Admin", destination: "Benin", deliveryDate: "10/31/2022", deliveryAddress: "Roadblock garage, Benin", receiverName: "Fola Olayemi", receiverGender:"Male", receiverPhone: "+234 815 1234 1716", receiverEmail: "fola@gmail.com",pickupPoint: "Junction, Benin", senderName: "Chukwa Ebube", senderContact: "+234 815 6322 1716", packageContent: "React", driverCode: "223546472524", deliveryCode: "234563986"},
      {id:"#12345673280", type: "Delivered", source: "Warehouse Admin", destination: "Abuja", deliveryDate: "10/31/2022", deliveryAddress: "Roadblock garage, Abuja", receiverName: "Yemi Olafemi", receiverGender:"Memale", receiverPhone: "+234 823 4522 1716", receiverEmail: "temi@gmail.com",pickupPoint: "Kubwa, Abuja", senderName: "Ebube Femi", senderContact: "+234 815 6322 1716", packageContent: "Carpets", driverCode: "223546472525", deliveryCode: "234563787"}
    ],
    driverList: [{id: "223546472525", password: "driv@!er"}, {id: "223546472524", password: "DRIV@!ER"}],
    driverID: "", 
    streamlinedList: [],
    requestClass: "highlighted",
    transitClass: "heading-text ",
    deliveredClass: "heading-text ",
    trackingNum: "",
    default: true,
    requestView: "Request",
    deliveryDetailView: "none",
    transferRequest: "none",
    threeDotsOptions: "none",
    deliveryRequest: false,
    transferDriverID: "",
    transferError: true,
    transferDriverError: false,
    displayTransferError: false
  })

  const list = states.requestList
  // Packages for the driver that logged in
  // const list = states.requestList.filter( item => item.driverCode === states.driverID)
  const {state} = useLocation()

  useEffect(() => {
    
    setStates({...states, streamlinedList:
      list.filter( item => item.type === "Pickup" || item.type === "Transfer"), driverID: state.driverID})
    console.log(state.driverID)
    console.log(states)
    console.log(list)
  }, [])

 

  const handleAddRequest = (e) => {
    e.preventDefault()
    setStates({...states, default:false})
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setStates({...states, default:true})
  }

  const handleRequestTitleClick =(e) => {
    e.preventDefault()
    const type = e.target.innerText
    
    
    // creating a streamlined list so I get the tracking ID of a a clicked item
    // const list = states.requestList
    switch(type){
      case "Request" :
        setStates({...states, requestView: type, streamlinedList:
          list.filter( item => item.type === "Pickup" || item.type === "Transfer"), requestClass: "highlighted", transitClass: "heading-text", deliveredClass: "heading-text"
        })
      break
      case "In Transit":
        setStates({...states, requestView: type, streamlinedList:
          list.filter( item => item.type === "Transit"), requestClass: "heading-text", transitClass: "highlighted", deliveredClass: "heading-text"
        })
      break
      case "Delivered":
        setStates({...states, requestView: type, streamlinedList:
          list.filter( item => item.type === "Delivered"), requestClass: "heading-text", transitClass: "heading-text", deliveredClass: "highlighted"
        })
      break
      default:
      break
    }
  }

  const handleRequestItemClick =(e, key) => {
    e.preventDefault()
    // making the details of clicked item visible
    // and also setting it's tracking id in the state object
    let list = states.streamlinedList
    const trackNum = list[key].id
    setStates({...states, deliveryDetailView: key, trackingNum: trackNum})
    
  }

  const handleCancelDeliveryDetail = (e) => {
    e.preventDefault()
    setStates({...states, deliveryDetailView: "none"})
  }

  const handleStartTrip = () => {
    const removedItemList = list.filter( item => item.id !== states.trackingNum)
    const item = list.filter( item => item.id === states.trackingNum)
    item[0].type = "Transit"
    const newList = removedItemList.concat(item)
    setStates({...states, requestList: newList, deliveryDetailView: "none"})
    
  }
 
  const handleThreeDots = () => {

    if(states.transferRequest === "none"){
      setStates({...states, transferRequest: "option"})
    }
    else if(states.transferRequest === "option"){
      setStates({...states, transferRequest: "none"})
    }
    
  }

  const handleThreeDotsOptions = (e) => {

    let option = e.target.innerText
    switch(option){
      case "Request Transfer" :
        setStates({...states, threeDotsOptions: "Request Transfer", deliveryDetailView: "none", transferRequest: "none"})
      break
      default:
      break
    }

  }

  const handleCancelRequestTransfer = () => {
    setStates({...states, threeDotsOptions: "none"})
  }

  const handleRequestInputChange = (e) => {
    const {name, value} = e.target;

    if (states.transferDriverID.length === 0){
      setStates({...states, transferError: true, [name]:value, displayTransferError: false})
    }
    else {
      setStates({...states, transferError: false, [name]:value, displayTransferError: false})
    }
  }

  const handleSubmitRequestTransfer = (e) => {
    e.preventDefault()
    
    // finding driver
    const driverList = states.driverList
    const driver =  driverList.find( driver => 
      driver.id === states.transferDriverID && driver.id !== states.driverID
      )

    // changing drivercode of package
    const removedItemList = list.filter( item => item.id !== states.trackingNum)
    const item = list.filter( item => item.id === states.trackingNum)

    item[0].type = "Transfer"
    item[0].driverCode = states.transferDriverID
    const newList = removedItemList.concat(item)

      if (driver){
        setStates({...states, displayTransferError: false, requestList: newList})
        console.log("Yaay!!!!")
      }
      else {
        setStates({...states, displayTransferError: true})
        console.log("Naay!!!!")
      }
  }

  const handlePackageDelivery = () => {
    setStates({...states, deliveryRequest: "arrived", deliveryDetailView: "none"})
  }

  const handleCancelDelivery = () => {
    setStates({...states, deliveryRequest: false})
  }

  console.log(states)
  console.log("streanlined List ", states.streamlinedList )

  return(
    <div>
      { states.default && 
        <div>
          <div className="icons-div">
            <img src={leftArrow} alt="back to previous page" className="arrow-img icon-img"/>
            <img 
              src={addIcon} 
              alt="add request" 
              className="plus-img icon-img"
              onClick={handleAddRequest}
            />

          </div>

          <div 
            className="heading-text-div"
            onClick={handleRequestTitleClick}
          >
            <p className={states.requestClass}>Request</p>
            <p className={states.transitClass}>In Transit</p>
            <p className={states.deliveredClass}>Delivered</p>
            {/* heading-text highlighted */}
          </div>

{/* Request Items */}
          {states.requestView === "Request" && states.requestList
            .filter( item => item.type === "Pickup" || item.type === "Transfer")
            .map( (request, key) => 
              <div key={request.id} >
                <RequestItem
                type={request.type}
                source={request.source}
                click={e => handleRequestItemClick(e, key)}
                />
                {states.deliveryDetailView === key && 
                  <DeliveryDetails                  
                    trackNum={request.id}
                    deliveryDate={request.deliveryDate} 
                    deliveryAddress={request.deliveryAddress} 
                    receiverName={request.receiverName} 
                    receiverGender={request.receiverGender} 
                    receiverPhone={request.receiverPhone} 
                    receiverEmail={request.receiverEmail} 
                    pickupPoint={request.pickupPoint} 
                    senderName={request.senderName} 
                    senderContact={request.senderContact} 
                    packageContent={request.packageContent} 
                    handleCancel={handleCancelDeliveryDetail}
                    btnTitle="Start Trip"
                    handleSubmit={handleStartTrip}
                  />
                }
              </div>
            )
          }
{/* In Transit Items */}
          {states.requestView === "In Transit" && states.requestList
            .filter( item => item.type === "Transit")
            .map((request, key) => 
              <div key={request.id}>
                <TransitItem 
                    img={transitIcon}
                    imgAltText="transit item"
                    id={request.id}
                    destination={request.destination}
                    click={e => handleRequestItemClick(e, key)}
                />
                {states.deliveryDetailView === key && 
                  <TransitDeliveryDetails                  
                    trackNum={request.id}
                    deliveryDate={request.deliveryDate} 
                    deliveryAddress={request.deliveryAddress} 
                    receiverName={request.receiverName} 
                    receiverGender={request.receiverGender} 
                    receiverPhone={request.receiverPhone} 
                    receiverEmail={request.receiverEmail} 
                    pickupPoint={request.pickupPoint} 
                    senderName={request.senderName} 
                    senderContact={request.senderContact} 
                    packageContent={request.packageContent} 
                    handleCancel={handleCancelDeliveryDetail}
                    handleThreeDots={handleThreeDots}
                    threeDotState={states.transferRequest}
                    handleThreeDotsOption={handleThreeDotsOptions}
                    btnTitle="I've arrived at location"
                    handleSubmit={handlePackageDelivery}
                  />
                }
              </div>
            )
          }

{/* Delivered Items */}
          {states.requestView === "Delivered" && states.requestList
            .filter( item => item.type === "Delivered")
            .map((request, key) => 
            <div key={request.id}>
              <TransitItem 
                img={deliveredIcon}
                imgAltText="delivered item"
                id={request.id}
                destination={request.destination}
                click={e => handleRequestItemClick(e, key)}
              />
              {states.deliveryDetailView === key && 
                  <DeliveryCompleted                  
                    trackNum={request.id}
                    deliveryDate={request.deliveryDate} 
                    deliveryAddress={request.deliveryAddress} 
                    receiverName={request.receiverName} 
                    receiverGender={request.receiverGender} 
                    receiverPhone={request.receiverPhone} 
                    receiverEmail={request.receiverEmail} 
                    pickupPoint={request.pickupPoint} 
                    senderName={request.senderName} 
                    senderContact={request.senderContact} 
                    packageContent={request.packageContent} 
                    handleCancel={handleCancelDeliveryDetail}
                    btnTitle="Submit"
                  />
                }
            </div>
            )
          }

                


        </div>
      }

      {/* Scanner Page */}
      { !states.default &&
        <div>
          <div className="icons-div" onClick={handleCancel}>
            <img src={closeIcon} alt="close scanner" className="plus-img icon-img"/>
          </div>

          <h1 className="scan-header-text">Place the QR code within the box</h1>
          <p className="scan-header-subtext">Scanning will start automatically</p>

          <div className="scan-img-div">
            <img 
              src={scanImg} 
              alt="scanner" 
              className="scan-img" />
          </div>

          <Button
            title="Cancel"
            className="scan-cancel-btn"
            btnClick={handleCancel}
          />

        </div>
      }

      {/* Transfer Package Page */}
      {states.threeDotsOptions === "Request Transfer" &&
        <PackageTransfer
          handleCancel={handleCancelRequestTransfer}
          handleSubmit={handleSubmitRequestTransfer}
          transferDriverID={states.transferDriverID}
          inputChange={handleRequestInputChange}
          error={states.transferError}
          driverError={states.displayTransferError}
         />
      }

      {/* Delivery Form */}
      {states.deliveryRequest === "arrived" &&
        <DeliveryForm 
        handleCancel={handleCancelDelivery}
        />
      }


      <Alert
      bold="Request was sent successfully"
      lineOne="We are notifying the Driver"
      lineTwo="about your request..."
      />


    </div>
  )
}

export default Request;