import React from "react";
import PersonalInfoHeader from "../personalInfo-component/personalInfoHeader";
class CVhead extends React.Component {
	constructor(props) {
		super(props);
	}
	// get propertiers from personalInfo object
	render() {
		return (
			<div
				id="head-container"
				className="px-10 py-3 h-[100px]  border-black border-2 border-solid flex flex-col justify-center items-center text-center"
			>
				<PersonalInfoHeader />
			</div>
		);
	}
}

export default CVhead;
