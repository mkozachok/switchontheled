var socket = io();
function toggle(){
	console.log('led on');
    socket.emit('toggle');
}
function blink(){
	console.log('led off');
    socket.emit('blink');
}

document.getElementById('toggle').onclick = toggle;
document.getElementById('blink').onclick = blink;