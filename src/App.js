import "./App.css";
import React from "react";
import SkillList from "./components/skillList";
import ExperienceInput from "./components/experience-component/experienceInput";
import ExperienceList from "./components/experience-component/experienceList";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: [],
			input: "",
			experience: [],
			userExperienceInput: {
				jobTitle: "",
				startDate: "",
				endData: "",
				jobLocation: "",
				jobDescription: "",
			},
		};
		this.handleSkillInput = this.handleSkillInput.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.handleExperienceInput = this.handleExperienceInput.bind(this);
	}

	handleSkillInput(e) {
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

	handleExperienceInput(e) {
		if (e.target.id === "title-job-input") {
			this.setState(
				{
					userExperienceInput: {
						...this.state.userExperienceInput,
						jobTitle: e.target.value,
					},
				},
				() => console.log(this.state)
			);
		}

		if (e.target.id === "desc-job-input") {
			this.setState(
				{
					userExperienceInput: {
						...this.state.userExperienceInput,
						jobDescription: e.target.value,
					},
				},
				() => console.log(this.state)
			);
		}
	}

	render() {
		return (
			<div id="app-container">
				<input
					onChange={this.handleSkillInput}
					className="border-[2px] border-solid border-zinc-700"
					type="text"
				/>
				<button onClick={this.addSkill} type="button">
					Add Skill
				</button>
				<SkillList skillsArr={this.state.skills} />

				<div>
					<ExperienceInput inputHandler={this.handleExperienceInput} />
				</div>
				<div>
					<ExperienceList />
				</div>
			</div>
		);
	}
}

export default App;
