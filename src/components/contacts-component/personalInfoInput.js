import React from "react";

class ContactInput extends React.Component {
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
					<input type="image" id="image-file" />
				</div>

				<div id="email-input-cont">
					<label htmlFor="email-input">Email Address:</label>
					<input type="email" id="email-input" />
				</div>

				<div id="phone-input-cont">
					<label htmlFor="phone-input">Phone Number:</label>
					<input type="number" id="phone-input" />
				</div>

				<div id="introduction-input-cont">
					<label htmlFor="introduction-input">:</label>
					<textarea minLength="150" maxLength="385" id="introduction-input" />
				</div>
			</div>
		);
	}
}


export default ContactInput;