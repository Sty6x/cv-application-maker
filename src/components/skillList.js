import React from "react";
import Skill from "./skill";
class SkillList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul id="skill-list">
                <Skill name={this.props.taskName}/>
            </ul>
        )
    }
}

export default SkillList