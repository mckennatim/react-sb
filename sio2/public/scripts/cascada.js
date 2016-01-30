//$(document).ready(function(){
	namespace = '/test'; 
	var socket = io.connect('http://10.0.1.154:8087' + namespace);
	socket.on('connect', function() {
		socket.emit('my event', {data: 'I\'m connected!'});
	});
	socket.on('my response', function(msg) {
		$('#log').append('<br>Received #' + msg.count + ': ' + msg.data);
		var dtao = JSON.parse(msg.data)
		console.log(dtao)
		$('#tdisp').html(dtao.pond.tleft)
	});
//});
var Yard = React.createClass({
	render: function(){
		return (
			<div>hello react</div>
			)
	}
})
React.render(
	<Yard />,
	document.getElementById("content")
	)