import React from "react";
import EducationInput from "../education-component/educationInput";
import ExperienceInput from "../experience-component/experienceInput";
import PersonalInfoInput from "../personalInfo-component/personalInfoInput";
import SkillInput from "../skill-component/skillInput";

class SideBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="sidebar-container">
                <PersonalInfoInput/>
                <ExperienceInput/>
                <EducationInput/>
                <SkillInput/>
            </div>
        )
    }
}

export default SideBar