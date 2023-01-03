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
				endDate: "",
				jobLocation: "",
				jobDescription: "",
			},
		};
		this.handleSkillInput = this.handleSkillInput.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.handleExperienceInput = this.handleExperienceInput.bind(this);
		this.addExperience = this.addExperience.bind(this);
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

		if (e.target.id === "location-job-input") {
			this.setState(
				{
					userExperienceInput: {
						...this.state.userExperienceInput,
						jobLocation: e.target.value,
					},
				},
				() => console.log(this.state)
			);
		}

		if (e.target.id === "start-date-job-input") {
			this.setState(
				{
					userExperienceInput: {
						...this.state.userExperienceInput,
						startDate: e.target.value,
					},
				},
				() => console.log(this.state)
			);
		}

		if (e.target.id === "end-date-job-input") {
			this.setState(
				{
					userExperienceInput: {
						...this.state.userExperienceInput,
						endDate: e.target.value,
					},
				},
				() => console.log(this.state)
			);
		}
	}

	// need to remove value for each input filed that is added 
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

	addExperience() {
		this.setState(
			{
				experience: this.state.experience.concat(this.state.userExperienceInput),
			},
			() => console.log(this.state)
		);
	}
	render() {
		return (
			<div>
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
					<ExperienceInput
						addExperienceHandler={this.addExperience}
						inputHandler={this.handleExperienceInput}
					/>
				</div>
				<div>
					<ExperienceList experienceList={this.state.experience}/>
				</div>
			</div>
		);
	}
}

export default App;
