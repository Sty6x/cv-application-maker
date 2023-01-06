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
					<input type="text" id="introduction-input" />
				</div>
			</>
		);
	}
}


export default IntroductionInput