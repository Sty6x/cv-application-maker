import React from "react";

class CVphoto extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="cv-photo-container" className="flex flex-col items-center">
				<div
					id="photo-ph"
					className="flex justify-center items-center border-2 border-black border-solid rounded-full w-[150px] h-[150px]"
				>
					<img id="cv-photo" alt="cv photo"></img>
				</div>
			</div>
		);
	}
}

export default CVphoto;
