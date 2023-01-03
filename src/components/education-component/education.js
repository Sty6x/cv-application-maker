import React from "react";

class Education extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        const {graduationYear,schoolDescription,schoolLocation,schoolName} = this.props.schoolInfo;
		return (
			<div id={this.props.ID} className="education-container">

				<div className="education-location-date">
					<p>
						{graduationYear}
					</p>
					<p className="school-location">{schoolLocation}</p>
				</div>
				<div className="school-name-desc">
					<h3 className="school-name">{schoolName}</h3>
					<p className="school-desc">{schoolDescription}</p>
				</div>
				<button onClick={this.props.removeEducation} type="button">
					Remove Education
				</button>
			</div>
		);
	}
}


export default Education