import React from "react";

class Introduction extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="introduction-container" className="h-[210px] min-w-full">
				<h3 className="main-titles">Introduction</h3>
				<p className="whitespace-normal indent-5">
					{this.props.intro}
				</p>
			</div>
		);
	}
}

export default Introduction;
