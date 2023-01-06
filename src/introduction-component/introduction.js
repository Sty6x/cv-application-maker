import React from "react";

class Introduction extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="introduction-container" className="h-[210px]">
				<h3 className="main-titles">Introduction</h3>
{/* <p className="indent-5">
					Lorem6 ipsum odor amet, consectetuer adipiscing elit. Vitae hendrerit aenean euismod bibendum
					fau100cibus aliquet cras risus nibh conubia rutrum elementum luctus; gravida ultricies
					ullamcorper vest200ibulum potenti massa conubia. Dictum magna curabitur gravida nisi curae
					nascetur ut feugiat volut300pat cubilia ultrices rhoncus hac gravida adipiscing habitant.
				</p> */}
				<p className="indent-5">
					Lorem6 ipsum odor amet, consectetuer adipiscing elit. Vitae hendrerit aenean euismod bibendum
					fau100cibus aliquet cras risus nibh conubia rutrum elementum luctus; gravida ultricies
				</p>
			</div>
		);
	}
}

export default Introduction;
