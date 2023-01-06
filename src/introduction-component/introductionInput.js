import React from "react";

class IntroductionInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div id="intro-input-container">
					<label htmlFor="introduction-input">Introduction:</label>
					<textarea className="block" maxLength="380" minLength="150" id="introduction-input" />
				</div>
			</>
		);
	}
}


export default IntroductionInput