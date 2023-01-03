import React from "react";
import Experience from "./experience";
class ExperienceList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const experiences = this.props.experienceList
        let key = this.props.expKey;
        let ID = this.props.expID
        const displayExperience = experiences.map(experience=>{
            return <Experience ID={ID++} key={key++} experience={experience}/>
        })
        return(
            <div id="experience-list-container">
            {displayExperience}
            </div>
        )
    }
}

export default ExperienceList