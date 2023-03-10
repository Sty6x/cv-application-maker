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
				className="px-10 py-3 h-[100px] text-white bg-[#4C566A] flex flex-col justify-center items-center text-center"
			>
				<PersonalInfoHeader name={this.props.persInfoName} job={this.props.persInfoJobTitle}/>
			</div>
		);
	}
}

export default CVhead;
