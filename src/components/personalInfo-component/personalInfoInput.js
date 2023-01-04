import React from "react";

class PersonalInfoInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="personal-info-input-container">
				<div id="name-input-cont">
					<label htmlFor="name-input">Name:</label>
					<input type="text" id="name-input" />
				</div>

				<div id="lf-input-cont">
					<label htmlFor="lf-input">Job Title:</label>
					<input type="text" id="lf-input" />
				</div>

				<div id="image-file-cont">
					<label htmlFor="image-file">Photo:</label>
					<input type="file" id="image-file" accept="image/jpeg, image/png, image/jpg" />
				</div>

				<div id="email-input-cont">
					<label htmlFor="email-input">Email Address:</label>
					<input type="email" id="email-input" />
				</div>

				<div id="address-input-cont">
					<label htmlFor="address-input">Address:</label>
					<input type="text" id="address-input" />
				</div>

				<div id="phone-input-cont">
					<label htmlFor="phone-input">Phone Number:</label>
					<input type="number" id="phone-input" />
				</div>
			</div>
		);
	}
}

export default PersonalInfoInput;
