import React from "react";
class ExperienceInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const inputHandler = this.props.inputHandler;
		const addExperience = this.props.addExperience;
		return (
			<div id="experience-input-field">
				<div id="job-input-container">
					<label htmlFor="job-input">Job:</label>
					<input onChange={inputHandler} name="job-input" id="title-job-input" />
				</div>
				<div id="company-name-container">
					<label htmlFor="company-name-input">Company Name:</label>
					<input onChange={inputHandler} name="company-name-input" id="company-name-input" />
				</div>
				<div id="job-location-input-container">
					<label htmlFor="location-job-input">Location:</label>
					<input onChange={inputHandler} name="location-job-input" id="location-job-input" />
				</div>
				<div id="job-desc-input-container">
					<label htmlFor="desc-job-input">Description:</label>
					<input onChange={inputHandler} name="desc-job-input" id="desc-job-input" />
				</div>
				<div id="job-startdate-input-container">
					<label htmlFor="start-date-job-input">Start:</label>
					<input onChange={inputHandler} name="start-date-job-input" id="start-date-job-input" />
				</div>
				<div id="job-enddate-input-container">
					<label htmlFor="end-date-job-input">End:</label>
					<input onChange={inputHandler} name="end-date-job-input" id="end-date-job-input" />
				</div>

				<button onClick={addExperience} type="button">
					Add Experience
				</button>
			</div>
		);
	}
}

export default ExperienceInput;
