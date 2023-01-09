import React from "react";
import { v4 } from "uuid";
import Skill from "./skill";
class SkillList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const skills = this.props.skills;
		let displaySkills = skills.map((skill) => {
			return <Skill key={v4()} skill={skill} />;
		});
		return (
			<ul className="flex flex-col text-white" id="skill-list">
				<h3 className="side-titles">Skills:</h3>
				{skills.length ? displaySkills : <p className="fallback-list-sb">ADD YOUR SKILLS</p>}
			</ul>
		);
	}
}

export default SkillList;
