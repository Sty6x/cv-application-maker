import React from "react";
import Education from "./education";
class EducationList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		const { educKey, educID } = this.props;
		let key = educKey;
		let ID = educID;
		const educations = this.props.educations
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
			<div id="outer-education-container">
				<h3 className="main-titles">Education</h3>
				<div id="education-list-container">{displayEducation}</div>
			</div>
		);
	}
}

export default EducationList;
