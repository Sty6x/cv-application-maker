import React from "react";
import { v4 } from "uuid";
import Experience from "./experience";
class ExperienceList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
	
		let key = this.props.expKey;
		let ID = this.props.expID;
		const experiences = this.props.experiences
		const displayExperience = experiences.map((experience) => {
			return (
				<Experience
					removeExperience={this.props.removeExpHandler}
					ID={ID++}
					key={v4()}
					experience={experience}
				/>
			);
		});
		return (
			<div id="outer-experience-container" className="min-h-[310px]">
				<h3 className="main-titles">Experience</h3>
				<div id="experience-list-container">{displayExperience}</div>
			</div>
		);
	}
}

export default ExperienceList;
