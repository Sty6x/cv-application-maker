import React from "react";
class Experience extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {companyName,jobTitle,jobDescription,endDate, startDate, jobLocation} = this.props.experience;
        return(
            <div id={this.props.ID} className="experience-container">
                <div className="job-location-date">
                    <p>{startDate}-{endDate}</p>
                    <p className="job-location">{jobLocation}</p>
                </div>
                <div className="job-title-desc">
                    <h3 className="job-title">{companyName}, <span>{jobTitle}</span></h3>
                    <p className="job-desc">{jobDescription}</p>
                </div>
                {/* <button onClick={this.props.removeExperience} type="button">Remove Experience</button> */}
            </div>
        )
    }
}

export default Experience