import React from "react";
import Skill from "./skill";
class SkillList extends React.Component{
    constructor(props){
        super(props)
        this.skillss = ['skill 1', 'skill 2' ,'skill 3','skill 4','skill 5']
    }
    render(){
        const skills = this.props.skillsArr
        let displaySkills = this.skillss.map(skill=>{
           return  <Skill skill={skill} />
        })
        return(
            <ul className="flex flex-col text-white"  id="skill-list">
                <h3 className="side-titles">Skills:</h3>
                {displaySkills}
            </ul>
        )
    }
}

export default SkillList