import React from "react"


// for side bar info
class PersonalInfo extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div id="personal-info-containr">
                <div id="email-address">
                    <p></p>
                </div> 
                <div id="phone-number">
                    <p></p>
                </div> 
                <div id="address">
                    <p></p>
                </div> 
            </div>
        )
    }

}