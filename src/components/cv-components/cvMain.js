import React from "react";
import Introduction from "../../introduction-component/introduction";
import EducationList from "../education-component/educationList";
import ExperienceList from "../experience-component/experienceList";

class CVmain extends React.Component {
	constructor(props) {
		super(props);
	}
	// delegate education and experience arrays here from App.js
	render() {
		return (
			<div id="cv-main-container" className="px-7 py-3 bg-[#ebf0f8] min-h-[800px]">
				<Introduction/>
				 <ExperienceList/> 
				 <EducationList/> 
			</div>
		);
	}
}

export default CVmain;
