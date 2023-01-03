import "./App.css";
import React from "react";
import SkillList from "./components/skillList";
import ExperienceInput from "./components/experience-component/experienceInput";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: [],
			input: "",
		};
		this.handleInput = this.handleInput.bind(this);
		this.addSkill = this.addSkill.bind(this);
	}

	handleInput(e) {
		this.setState(
			{
				input: e.target.value,
			},
			() => {
				console.log(this.state);
			}
		);
	}

	addSkill() {
		if (this.state.input === "") {
			return;
		} else {
			this.setState(
				{
					skills: this.state.skills.concat(this.state.input),
					input: "",
				},
				() => {
					console.log(this.state);
				}
			);
		}
	}

	render() {
		return (
			<div id="app-container">
				<input
					onChange={this.handleInput}
					className="border-[2px] border-solid border-zinc-700"
					type="text"
				/>
				<button onClick={this.addSkill} type="button">
					Add Skill
				</button>
				<SkillList skillsArr={this.state.skills} />
				<>
					<ExperienceInput />
				</>
			</div>
		);
	}
}

export default App;
