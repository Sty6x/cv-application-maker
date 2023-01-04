import "./App.css";
import React from "react";
import SkillList from "./components/skill-component/skillList";
import ExperienceInput from "./components/experience-component/experienceInput";
import ExperienceList from "./components/experience-component/experienceList";
import SkillInput from "./components/skill-component/skillInput";
import EducationInput from "./components/education-component/educationInput";
import EducationList from "./components/education-component/educationList";
import PersonalInfoInput from "./components/personalInfo-component/personalInfoInput";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: [],
			input: "",
			expKey: 0,
			expID: 0,
			experience: [],
			userExperienceInput: {
				jobTitle: "",
				startDate: "",
				endDate: "",
				jobLocation: "",
				jobDescription: "",
			},
			educKey: 0,
			educID: 0,
			education: [],
			userEducationInput: {
				schoolName: "",
				graduationYear: "",
				schoolLocation: "",
				schoolDescription: "",
			},
		};
		this.handleSkillInput = this.handleSkillInput.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.handleExperienceInput = this.handleExperienceInput.bind(this);
		this.addExperience = this.addExperience.bind(this);
		this.removeExperience = this.removeExperience.bind(this);
		this.handleEducationInput = this.handleEducationInput.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.removeEducation = this.removeEducation.bind(this);
	}

	handleSkillInput(e) {
		this.setState({
			input: e.target.value,
		});
	}

	handleExperienceInput(e) {
		if (e.target.id === "title-job-input") {
			this.setState({
				userExperienceInput: {
					...this.state.userExperienceInput,
					jobTitle: e.target.value,
				},
			});
		}

		if (e.target.id === "desc-job-input") {
			this.setState({
				userExperienceInput: {
					...this.state.userExperienceInput,
					jobDescription: e.target.value,
				},
			});
		}

		if (e.target.id === "location-job-input") {
			this.setState({
				userExperienceInput: {
					...this.state.userExperienceInput,
					jobLocation: e.target.value,
				},
			});
		}

		if (e.target.id === "start-date-job-input") {
			this.setState({
				userExperienceInput: {
					...this.state.userExperienceInput,
					startDate: e.target.value,
				},
			});
		}

		if (e.target.id === "end-date-job-input") {
			this.setState({
				userExperienceInput: {
					...this.state.userExperienceInput,
					endDate: e.target.value,
				},
			});
		}
	}

	handleEducationInput(e) {
		if (e.target.id === "school-name-input") {
			this.setState({
				userEducationInput: {
					...this.state.userEducationInput,
					schoolName: e.target.value,
				},
			});
		}

		if (e.target.id === "school-location-input") {
			this.setState({
				userEducationInput: {
					...this.state.userEducationInput,
					schoolLocation: e.target.value,
				},
			});
		}

		if (e.target.id === "school-grad-date-input") {
			this.setState({
				userEducationInput: {
					...this.state.userEducationInput,
					graduationYear: e.target.value,
				},
			});
		}

		if (e.target.id === "school-desc-input") {
			this.setState({
				userEducationInput: {
					...this.state.userEducationInput,
					schoolDescription: e.target.value,
				},
			});
		}
	}
	// need to remove value for each input filled that is added
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

	addEducation() {
		this.setState(
			{
				education: this.state.education.concat(this.state.userEducationInput),
			},
			() => console.log(this.state)
		);
	}
	removeExperience(e) {
		const experienceIndex = e.target.parentNode.id;
		const sliced = this.state.experience.splice(experienceIndex, 1);
		// i had to mutate the array to be able to delete a specific element
		//sorry i dont know whats going on here
		this.setState({});
	}
	removeEducation(e) {
		const educationIndex = e.target.parentNode.id;
		const sliced = this.state.education.splice(educationIndex, 1);
		// i had to mutate the array to be able to delete a specific element
		//sorry i dont know whats going on here
		this.setState({});
	}
	render() {
		// Lists should be in another component to display the users input details
		return (
			<div id="app-container">
				<div id="personal-info">
					<PersonalInfoInput />
				</div>

				<div id="experience">
					<ExperienceInput
						addExperienceHandler={this.addExperience}
						inputHandler={this.handleExperienceInput}
					/>
					<ExperienceList
						removeExpHandler={this.removeExperience}
						expID={this.state.expID}
						expKey={this.state.expKey}
						experienceList={this.state.experience}
					/>
				</div>
				<div id="education">
					<EducationInput
						addEducationHandler={this.addEducation}
						inputHandler={this.handleEducationInput}
					/>
					<EducationList
						removeEducHandler={this.removeEducation}
						educID={this.state.educID}
						educKey={this.state.educKey}
						educationList={this.state.education}
					/>
				</div>
				<div id="skill">
					<SkillInput handleSkillInput={this.handleSkillInput} addSkill={this.addSkill} />
					<SkillList skillsArr={this.state.skills} />
				</div>
			</div>
		);
	}
}

export default App;
