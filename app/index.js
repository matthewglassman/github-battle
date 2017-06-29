var React = require('react');
var ReactDOM = require('react-dom');

//The code below will allow our webpack bundle to initialize index.css each the app is run
require('./index.css');

//Components may have the following properties
//state
//lifecycle events
//UI --> only one that is required

//Component Creation
class App extends React.Component {
	render(){
		return (
			<div>
				Hello World!
			</div>
		)
	}
}

//Render component to the DOM
ReactDOM.render(
	<App />, document.getElementById('app')
);