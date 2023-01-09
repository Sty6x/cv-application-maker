import React from "react";

class AchievementInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        const {inputHandler,addAchievements} =this.props
		return (
			<div id="skill-input-container">
				<input
					onChange={inputHandler}
					className="border-[2px] border-solid border-zinc-700"
					type="text"
				/>
				<button onClick={addAchievements} type="button">
					Add Achievement 
				</button>
			</div>
		);
	}
}

export default AchievementInput 

