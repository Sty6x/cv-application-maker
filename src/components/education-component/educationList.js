import React from "react";
import Education from "./education";
class EducationList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const educations = this.props.educationList;
		let key = this.props.eduKey;
		let ID = this.props.eduID;
		
		return <div id="experience-list-container">educationlist</div>;
	}
}

export default EducationList