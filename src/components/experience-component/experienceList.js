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
				jobDescription: "aa little f this, and a littlea little f this, and a littlea little f this, and a littlea little f this, and a little little f this, and a little bit of that",
			},
			{
				startDate: 2019,
				companyName: "PcFix",
				endDate: 2022,
				jobLocation: "Dubai",
				jobTitle: "Pc Maintenance",
				jobDescription: "ae bit of that",
			},
			{
				startDate: 2019,
				companyName: "PcFix",
				endDate: 2022,
				jobLocation: "Dubai",
				jobTitle: "Pc Maintenance",
				jobDescription: "a little bit of ttle bit of that",
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
			<div id="outer-experience-container" className="min-h-[310px]">
				<h3 className="main-titles">Experience</h3>
				<div id="experience-list-container">{displayExperience}</div>
			</div>
		);
	}
}

export default ExperienceList;
