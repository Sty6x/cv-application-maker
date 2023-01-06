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
			<div id="cv-body-container" className="flex min-h-full w-[750px]">
				<CVside />
				<div id="header-main-container" className=" w-full ">
					<CVhead />
					<CVmain />
				</div>
			</div>
		);
	}
}

export default CVbody;
