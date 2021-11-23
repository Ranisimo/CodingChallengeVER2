// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:3000');

$(document).ready(function () {
    socket.onopen = () => {
        socket.send('Message From Client') 
    }

    socket.onerror = (error) => {
        socket.log(`WebSocket error: ${error}`)
    }

    socket.onmessage = (e) => {
        var dataMachines = JSON.parse(e.data);
        createInitTable(dataMachines); //
        console.log(dataMachines); //confirm message is being recieved
    }

    function createInitTable(dataMachines) {
        var name = dataMachines.name
        var newName = name.replace(' ', '_');
        $('#' + newName + ' td:last').text(dataMachines.state);
        if (dataMachines.state === 'PRODUCING') {
            $('#' + newName + ' td:last').css("background-color", "green");
        } else if (dataMachines.state === 'STARVED') {
            $('#' + newName + ' td:last').css("background-color", "red");
        } else {
            $('#' + newName + ' td:last').css("background-color", "yellow");
        }
    };
});