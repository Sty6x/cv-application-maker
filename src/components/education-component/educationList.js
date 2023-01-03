import React from "react";
import Education from "./education";
class EducationList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const educations = this.props.educationList;
		const {educKey, educID} = this.props;
		let key = educKey;
		let ID = educID
        const displayEducation = educations.map(education=>{
            return <Education ID={ID++} key={key++} removeEducation={this.props.removeEducHandler} schoolInfo={education}/>
        }) 
		
		return <div id="experience-list-container">{displayEducation}</div>;
	}
}

export default EducationList