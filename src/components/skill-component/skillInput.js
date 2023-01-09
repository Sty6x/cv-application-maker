import React from "react";

class SkillInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        const {inputHandler,addSkill} =this.props
		return (
			<div id="skill-input-container">
				<input
					onChange={inputHandler}
					className="border-[2px] border-solid border-zinc-700"
					type="text"
				/>
				<button onClick={addSkill} type="button">
					Add Skill
				</button>
			</div>
		);
	}
}

export default SkillInput
