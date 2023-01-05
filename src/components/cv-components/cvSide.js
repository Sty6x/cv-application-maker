import React from "react";
import CVPhoto from "../personalInfo-component/CVphoto"
import PersonalInfo from "../personalInfo-component/personalInfo";
import SkillList from "../skill-component/skillList";
class CVside extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div id="cv-side">
                <CVPhoto/>
                <PersonalInfo/>
                {/* <SkillList/> */}
            </div>
        )
    }
}

export default CVside