import React from "react";
import CVmain from "./cvMain";
import CVside from "./cvSide";
import CVhead from "./cvHead";
class CVbody extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {personalInfo,education,experience,skills,achievements,introduction} = this.props
		return (
			<div id="cv-body-container" className="flex w-[750px]">
				<CVside persInfo ={personalInfo} skills={skills} achievements={achievements} />
				<div id="header-main-container" className=" w-full ">
					<CVhead persInfoName={personalInfo.name} persInfoJobTitle ={personalInfo.jobTitle}/>
					<CVmain education={education} experience={experience} introduction={introduction}/>
				</div>
			</div>
		);
	}
}

export default CVbody;
