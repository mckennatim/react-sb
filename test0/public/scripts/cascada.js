// var SpotState = new React.createClass({
// 	render: function() {
// 		return (
// 			<tr>
// 				<td>dog</td>

// 			</tr>
// 		);
// 	}
// });

// var SpotSet = new React.createClass({
// 	render: function() {
// 		return (
// 			<div />
// 		);
// 	}
// // });

// var Spot =  React.createClass({
// 	render: function() {
// 		return (
// 			<div> {spot}<div/>
// 		);
// 	}
// });

// var Spots = React.createClass({
// 	render: function() {
// 		return (
// 			<div> {spots} </div>
// 		);
// 	}
// });

var Yard = React.createClass({
	render: function() {
		return (
			//<Spots spots={this.props.spots}/>
			<div> 'hehhehh' {spots}</div>
		);
	}
});

var SPOTS = {"pond": {"spot": "pond", "tleft": 159, "state": "on"}, "center": {"spot": "center", "tleft": -1, "state": "on"}, "bridge": {"spot": "bridge", "tleft": -1, "state": "on"}};

React.render(
	<Yard spots="hello" />, 
	document.getElementById("content")
);