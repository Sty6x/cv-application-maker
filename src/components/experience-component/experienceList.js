import React from "react";
import Experience from "./experience";
class ExperienceList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const experiences = [
			{
				startDate: 2019,
				companyName: "PcFix",
				endDate: 2022,
				jobLocation: "Dubai",
				jobTitle: "Pc Maintenance",
				jobDescription: "a little bit of this, and a little bit of that",
			},
			{
				startDate: 2019,
				companyName: "PcFix",
				endDate: 2022,
				jobLocation: "Dubai",
				jobTitle: "Pc Maintenance",
				jobDescription: "a little bit of this, and a little bit of that",
			},
		];
		let key = this.props.expKey;
		let ID = this.props.expID;
		const displayExperience = experiences.map((experience) => {
			return (
				<Experience
					removeExperience={this.props.removeExpHandler}
					ID={ID++}
					key={key++}
					experience={experience}
				/>
			);
		});
		return (
			<div id="experience-container">
				<h3 className="main-titles">Experience</h3>
				<div id="experience-list-container">{displayExperience}</div>
			</div>
		);
	}
}

export default ExperienceList;
