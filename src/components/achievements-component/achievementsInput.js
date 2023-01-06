import React from "react";

class AchievementInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        const {handleAchievementInput,addAchievement} =this.props
		return (
			<div id="skill-input-container">
				<input
					onChange={handleAchievementInput}
					className="border-[2px] border-solid border-zinc-700"
					type="text"
				/>
				<button onClick={addAchievement} type="button">
					Add Achievement 
				</button>
			</div>
		);
	}
}

export default AchievementInput 

