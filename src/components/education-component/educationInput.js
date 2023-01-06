import React from "react";

class EducationInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
        const inputHandler = this.props.inputHandler;
        const addEducHandler = this.props.addEducationHandler;
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
				<div id="school-location-input-container">
					<label htmlFor="school-location-input">School Location:</label>
					<input
						onChange={inputHandler}
						name="school-location-input"
						id="school-location-input"
					/>
				</div>
				<div id="school-course-input-container">
					<label htmlFor="school-course-input">Course:</label>
					<input
						onChange={inputHandler}
						name="school-course-input"
						id="school-course-input"
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

				<button onClick={addEducHandler} type="button">
					Add Education 
				</button>
			</div>
		);
	}
}


export default EducationInput