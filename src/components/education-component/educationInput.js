import React from "react";

class EducationInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
        const inputHandler = this.props.inputHandler;
        const addExpHandler = this.props.addExperienceHandler;
		return (
			<div id="education-input-field">
				<div id="education-input-container">
					<label htmlFor="school-name-input">School:</label>
					<input
						onChange={inputHandler}
						name="school-name-input"
						id="school-name-input"
					/>
				</div>
				<div id="scool-location-input-container">
					<label htmlFor="school-location-job-input">School Location:</label>
					<input
						onChange={inputHandler}
						name="location-school-input"
						id="location-school-input"
					/>
				</div>
				<div id="school-desc-input-container">
					<label htmlFor="desc-school-input">Description:</label>
					<input
						onChange={inputHandler}
						name="desc-school-input"
						id="desc-school-input"
					/>
				</div>
				<div id="school-grad-date-input-container">
					<label htmlFor="school-grad-date-job-input">Graduation Year:</label>
					<input
						onChange={inputHandler}
						name="school-grad-date-input"
						id="school-grad-date-input"
					/>
				</div>

				<button onClick={addExpHandler} type="button">
					Add Education 
				</button>
			</div>
		);
	}
}


export default EducationInput