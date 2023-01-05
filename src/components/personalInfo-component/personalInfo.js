import React from "react"


// for side bar info
class PersonalInfo extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div id="personal-info-container" className="text-white">
                <h3 className="side-titles">Personal Information:</h3>
                <div id="email-address">
                    <p>Jerylfranz@gmail.com</p>
                </div> 
                <div id="phone-number">
                    <p>09284719828</p>
                </div> 
                <div id="address">
                    <p>Dubai, Al rigga</p>
                </div> 
            </div>
        )
    }

}

export default PersonalInfo