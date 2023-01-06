import React from "react";
import Education from "./education";
class EducationList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const educations = [
			{
				schoolMame: "University of St.La salle",
				graduationYear: "2020",
				schoolLocation: "bacolod",
				schoolDescription: "stem",
			},

			{
				schoolName: "nohs",
				graduationYear: "2019",
				schoolLocation: "bacolod",
				schoolDescription: "stem",
			},
		];
		const { educKey, educID } = this.props;
		let key = educKey;
		let ID = educID;
		const displayEducation = educations.map((education) => {
			return (
				<Education
					ID={ID++}
					key={key++}
					removeEducation={this.props.removeEducHandler}
					schoolInfo={education}
				/>
			);
		});

		return (
			<div id="education-container">
				<h3 className="main-titles">Education</h3>
				<div id="education-list-container">{displayEducation}</div>
			</div>
		);
	}
}

export default EducationList;
