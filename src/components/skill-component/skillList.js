import React from "react";
import Skill from "./skill";
class SkillList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const skills = this.props.skills;
		let displaySkills = skills.map((skill) => {
			return <Skill skill={skill} />;
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
