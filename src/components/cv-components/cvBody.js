import React from "react";
import CVmain from "./cvMain";
import CVside from "./cvSide";
import CVhead from "./cvHead";
class CVbody extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="cv-body-container">
				<CVside />
				<div id="header-main-container">
					<CVhead />
					<CVmain />
				</div>
			</div>
		);
	}
}

export default CVbody;
