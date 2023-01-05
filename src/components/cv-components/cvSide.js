import React from "react";
import CVPhoto from "../personalInfo-component/CVphoto"
import PersonalInfo from "../personalInfo-component/personalInfo";
import SkillList from "../skill-component/skillList";
class CVside extends React.Component{

    constructor(props){
        super(props)
    }
    
   // delegate personalInfo object and skillarr 
    render(){
        return(
            <div id="cv-side" className="min-w-[30%] ">
                <CVPhoto/>
                <PersonalInfo/>
                {/* <SkillList/> */}
            </div>
        )
    }
}

export default CVside