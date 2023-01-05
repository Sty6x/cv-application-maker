import React from "react";

class PersonalInfoHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="header-info-container" >
				<h1 className="text-2xl font-semibold" id="name-head"> Jeryl Franz Diaz Benjamin</h1>
				<h2 className="text-xl font-medium text-[#c6c9ce]" id="job-title-head"> Front End Software Engineer</h2>
			</div>
		);
	}
}

export default PersonalInfoHeader
