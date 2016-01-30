var namespace = '/test'; 
var socket = io.connect('http://10.0.1.154:8070' + namespace);
socket.on('connect', function() {
	console.log('connected')
	socket.emit('my event', {data: 'I\'m connected!'});
});

var SpotState = new React.createClass({
	render: function() {
		return (
			<table>
			<tr> 
				<td>{this.props.spot.spot}</td>
				<td>timeleft: {this.props.spot.tleft}</td>
				<td>state: {this.props.spot.state}</td>
			</tr>
			</table>
		);
	}
});

// var SpotSet = new React.createClass({
// 	render: function() {
// 		return (
// 			<div />
// 		);
// 	}
// // });

var Spot = React.createClass({
	render: function() {
		return (
			<SpotState spot={this.props.spot} />
		);
	}
});

var Spots = React.createClass({
	render: function() {
		return (
			<div> 
			   Cascada
			<Spot spot={this.props.spots.pond} />
			<Spot spot={this.props.spots.bridge} />
			<Spot spot={this.props.spots.center} />
			</div>
		);
	}
});

var Yard = React.createClass({
	getInitialState: function() {
		return {spots: {"pond": {"spot": "pond", "tleft": -99, "state": "on"}, "center": {"spot": "center", "tleft": -99, "state": "on"}, "bridge": {"spot": "bridge", "tleft": -99, "state": "on"}}};
	},	
	getData: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({spots: data.spots});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},	
	componentDidMount: function() {
		socket.on('my response', function(msg) {
			console.log(msg)
		});		
		this.getData();
		setInterval(this.getData, this.props.pollEvery);
	},
	render: function() {
		//console.log(this.state.spots)
		return (
			<div> 10-12 Parley Vale <Spots spots={this.state.spots} /></div>
		);
	}
});

var SPOTS = {"pond": {"spot": "pond", "tleft": 159, "state": "on"}, "center": {"spot": "center", "tleft": -1, "state": "on"}, "bridge": {"spot": "bridge", "tleft": -1, "state": "on"}};

React.render(
	<Yard url="http://10.0.1.154:8087/report/" pollEvery={2000} />, 
	document.getElementById("content")
);