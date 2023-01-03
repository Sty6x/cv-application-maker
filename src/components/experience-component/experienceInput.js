import React from "react";

class ExperienceInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="experience-input-field">
				<div id="job-input-container">
					<label htmlFor="job-input">Job:</label>
					<input name="job-input" id="job-input" />
				</div>
				<div id="job-startdate-input-container">
					<label htmlFor="start-date-job-input">Start:</label>
					<input name="start-date-job-input" id="start-date-job-input" />
				</div>
				<div id="job-enddate-input-container">
					<label htmlFor="end-date-job-input">End:</label>
					<input name="end-date-job-input" id="end-date-job-input" />
				</div>
				<div id="job-desc-input-container">
					<label htmlFor="desc-job-input">End:</label>
					<input name="desc-job-input" id="desc-job-input" />
				</div>
			</div>
		);
	}
}


export default ExperienceInput