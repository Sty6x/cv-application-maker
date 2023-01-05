import React from "react";

class CVphoto extends React.Component {
	constructor(props) {
		super(props);
	}

    render(){
        return(
            <div id="cv-photo-container">
                <img id="cv-photo" alt="cv photo"></img>
            </div>
        )
    }
}

export default CVphoto