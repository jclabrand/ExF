
import React from 'react';

/****************************************************************************************/

class MainViews extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<html>
				<head>
					<title>School Exams</title>
					
					<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1"/>
					
					<link rel="shortcut icon" href="/icons/favicon.ico"/>
					<link rel="stylesheet" type="text/css" href={`/css/exf.min.css?${this.props.assetsVersion}`}/>
				</head>
				<body>
					<div id="app-main"></div>

					<script src={`/js/exf.min.js?${this.props.assetsVersion}`}/>
				</body>
			</html>
		);
	}
}

/****************************************************************************************/

export default MainViews;
