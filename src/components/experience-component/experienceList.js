import React from "react";
import Experience from "./experience";
class ExperienceList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const experiences = this.props.experienceList
        const displayExperience = experiences.map(experience=>{
            return <Experience experience={experience}/>
        })
        return(
            <div id="experience-list-container">
            {displayExperience}
            </div>
        )
    }
}

export default ExperienceList