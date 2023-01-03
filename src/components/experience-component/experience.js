import React from "react";
class Experience extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="experience-container">
                <div className="job-location-date">
                    <p></p>
                    <p className="job-location"></p>
                </div>
                <div className="job-title-desc">
                    <h3 className="job-title"></h3>
                    <p className="job-desc"></p>
                </div>
            </div>
        )
    }
}

export default Experience