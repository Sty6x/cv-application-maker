import React from "react";
class Experience extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {jobTitle,jobDescription,endDate, startDate, jobLocation} = this.props.experience;
        return(
            <div id={this.props.ID} className="experience-container">
                <div className="job-location-date">
                    <p>{startDate}, {endDate}</p>
                    <p className="job-location">{jobLocation}</p>
                </div>
                <div className="job-title-desc">
                    <h3 className="job-title">{jobTitle}</h3>
                    <p className="job-desc">{jobDescription}</p>
                </div>
                <button type="button">Remove Experience</button>
            </div>
        )
    }
}

export default Experience