import "./App.css";
import React from "react";
import SkillList from "./components/skill-component/skillList";
import ExperienceInput from "./components/experience-component/experienceInput";
import ExperienceList from "./components/experience-component/experienceList";
import SkillInput from "./components/skill-component/skillInput";
import EducationInput from "./components/education-component/educationInput";
import EducationList from "./components/education-component/educationList";
import PersonalInfoInput from "./components/personalInfo-component/personalInfoInput";
import CVbody from "./components/cv-components/cvBody";
import SideBar from "./components/sidebarInput-component/sidebar";

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
				companyName: "",
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
				course: "",
			},
			userPersonalInfoInput: {
				name: "",
				jobTitle: "",
				phoneNumber: "",
				emailAddress: "",
				address: "",
				photo: "",
			},
			personalInfo: {},
			introduction: "",
		};
		this.handleSkillInput = this.handleSkillInput.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.handleExperienceInput = this.handleExperienceInput.bind(this);
		this.addExperience = this.addExperience.bind(this);
		this.removeExperience = this.removeExperience.bind(this);
		this.handleEducationInput = this.handleEducationInput.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.removeEducation = this.removeEducation.bind(this);
		this.handlePersonalInfoInput = this.handlePersonalInfoInput.bind(this);
		this.addPersonalInfo = this.addPersonalInfo.bind(this);
	}

	handleSkillInput(e) {
		this.setState({
			input: e.target.value,
		});
	}

	handlePersonalInfoInput(e) {
		switch (e.target.id) {
			case "name-input":
				this.setState({
					userPersonalInfoInput: {
						...this.state.userPersonalInfoInput,
						name: e.target.value,
					},
				});
				break;
			case "lf-input":
				this.setState({
					userPersonalInfoInput: {
						...this.state.userPersonalInfoInput,
						jobTitle: e.target.value,
					},
				});
				break;
			case "image-file":
				this.setState(
					{
						userPersonalInfoInput: {
							...this.state.userPersonalInfoInput,
							photo: e.target.value,
						},
					},
					() => console.log(this.state.personalInfo)
				);
				break;
			case "email-input":
				this.setState({
					userPersonalInfoInput: {
						...this.state.userPersonalInfoInput,
						emailAddress: e.target.value,
					},
				});
				break;
			case "phone-input":
				this.setState({
					userPersonalInfoInput: {
						...this.state.userPersonalInfoInput,
						phoneNumber: e.target.value,
					},
				});
				break;
			case "address-input":
				this.setState({
					userPersonalInfoInput: {
						...this.state.userPersonalInfoInput,
						address: e.target.value,
					},
				});
				break;
		}
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

		if (e.target.id === "company-name-input") {
			this.setState({
				userExperienceInput: {
					...this.state.userExperienceInput,
					companyName: e.target.value,
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

		if (e.target.id === "school-course-input") {
			this.setState({
				userEducationInput: {
					...this.state.userEducationInput,
					course: e.target.value,
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

	addPersonalInfo() {
		this.setState(
			{
				personalInfo: {
					...this.state.userPersonalInfoInput,
				},
			},
			() => console.log(this.state)
		);
	}

	// remove the other function
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
		return (
			<div id="app-container" className="flex ">
				<SideBar />
				<div
					id="cv-outer-body-container"
					className="flex flex-1 justify-center px-16 py-12"
				>
					<CVbody />
				</div>
			</div>
		);
	}
}

export default App;
