import React from "react"


// for side bar info
class PersonalInfo extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {emailAddress, phoneNumber,address} = this.props.persInfo
        return(
            <div id="personal-info-container" className="flex flex-col text-white">
                <h3 className="side-titles">Personal Information:</h3>
                <div id="email-address">
                    <p>{emailAddress}</p>
                </div> 
                <div id="phone-number">
                    <p>{phoneNumber}</p>
                </div> 
                <div id="address">
                    <p>{address}</p>
                </div> 
            </div>
        )
    }

}

export default PersonalInfo