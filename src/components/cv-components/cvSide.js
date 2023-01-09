import React from "react";
import AchievementList from "../achievements-component/achievementList";
import CVPhoto from "../personalInfo-component/CVphoto"
import PersonalInfo from "../personalInfo-component/personalInfo";
import SkillList from "../skill-component/skillList";
class CVside extends React.Component{

    constructor(props){
        super(props)
    }
    
   // delegate personalInfo object and skillarr 
    render(){
        const {persInfo,skills,achievements} = this.props;
        return(
            <div id="cv-side" className=" bg-[#3B4252] h-[1000px] min-w-[30%] gap-8 flex  flex-col py-7 px-3 ">
                <CVPhoto userPhoto = {persInfo.image}/>
                <PersonalInfo persInfo={persInfo}/>
                <SkillList skills={skills}/>
                <AchievementList achievements={achievements}/>
            </div>
        )
    }
}

export default CVside