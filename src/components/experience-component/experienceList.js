import React from "react";
import Experience from "./experience";
class ExperienceList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const experiences = [
			{ startDate: 2019, endDate: 2022, jobLocation: "Dubai", jobTitle: "Pc Maintenance" },
			{ startDate: 2019, endDate: 2022, jobLocation: "Dubai", jobTitle: "Pc Maintenance" },
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
		return <div id="experience-list-container">{displayExperience}</div>;
	}
}

export default ExperienceList;
