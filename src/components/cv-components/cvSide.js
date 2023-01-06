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
            <div id="cv-side" className=" bg-[#3B4252] min-w-[30%] gap-8 flex  flex-col py-7 px-3 ">
                <CVPhoto/>
                <PersonalInfo/>
                <SkillList/>
            </div>
        )
    }
}

export default CVside