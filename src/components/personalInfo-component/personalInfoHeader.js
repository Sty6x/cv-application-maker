import React from "react";

class PersonalInfoHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, job } = this.props;
		return (
			<div id="header-info-container">
				<h1 className="text-2xl font-semibold" id="name-head">
					{name}
				</h1>
				<h2 className="text-xl font-medium text-[#c6c9ce]" id="job-title-head">
					{job}
				</h2>
			</div>
		);
	}
}

export default PersonalInfoHeader;
