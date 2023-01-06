import React from "react";
import IntroductionInput from "../../introduction-component/introductionInput";
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
            <div className="overflow-y text-white bg-[#2E3440] px-5 py-3 flex flex-col gap-y-10" id="sidebar-container">
                <PersonalInfoInput/>
                <IntroductionInput/>
                <ExperienceInput/>
                <EducationInput/>
                <SkillInput/>
            </div>
        )
    }
}

export default SideBar