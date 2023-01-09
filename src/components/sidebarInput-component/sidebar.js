import React from "react";
import AchievementInput from "../achievements-component/achievementsInput";
import EducationInput from "../education-component/educationInput";
import ExperienceInput from "../experience-component/experienceInput";
import IntroductionInput from "../introduction-component/introductionInput";
import PersonalInfoInput from "../personalInfo-component/personalInfoInput";
import SkillInput from "../skill-component/skillInput";

class SideBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			addEducation,
			handleEducationInput,
			addPersonalInfo,
			handlePersonalInfoInput,
			addSkill,
			addExperience,
            handleExperienceInput,
			addAchievements,
			addIntroduction,
            handleIntroductionInput
		} = this.props;
		return (
			<div
				className="overflow-y-scroll h-screen text-white bg-[#2E3440] px-5 py-3 flex flex-col gap-y-10"
				id="sidebar-container"
			>
				<PersonalInfoInput inputHandler={handlePersonalInfoInput} addPersonalInfo={addPersonalInfo} />
				<IntroductionInput inputHandler={handleIntroductionInput} addIntroduction={addIntroduction}/>
				<ExperienceInput inputHandler={handleExperienceInput} addExperience={addExperience}/>
				<EducationInput inputHandler={handleEducationInput} addEducation={addEducation} />
				<SkillInput />
				<AchievementInput />
			</div>
		);
	}
}

export default SideBar;
