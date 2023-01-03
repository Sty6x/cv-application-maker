import React from "react";
import Skill from "./skill";
class SkillList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const skills = this.props.skillsArr
        let displaySkills = skills.map(skill=>{
           return  <Skill skill={skill} />
        })
        return(
            <ul className="flex flex-col"  id="skill-list">
                {displaySkills}
            </ul>
        )
    }
}

export default SkillList