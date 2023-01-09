import React from "react";

class IntroductionInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const inputHandler = this.props.inputHandler;
		const addIntroduction = this.props.addIntroduction;
		return (
			<>
				<div id="intro-input-container">
					<label htmlFor="introduction-input">Introduction:</label>
					<textarea
						onChange={inputHandler}
						className="block"
						maxLength="380"
						minLength="150"
						id="introduction-input"
					/>
					<button onClick={addIntroduction} type="button">Add Introduction</button>
				</div>
			</>
		);
	}
}

export default IntroductionInput;
