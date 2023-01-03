import React from "react";
import Education from "./education";
class EducationList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const educations = this.props.educationList;
        const displayEducation = educations.map(education=>{
            return <Education schoolInfo={education}/>
        }) 
		
		return <div id="experience-list-container">{displayEducation}</div>;
	}
}

export default EducationList