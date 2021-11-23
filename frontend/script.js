// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    socket.send('Message From Client') 
}

socket.onerror = (error) => {
    socket.log(`WebSocket error: ${error}`)
}

socket.onmessage = (e) => {
    console.log(e.data)
    var dataMachines = JSON.parse(e.data);
    console.log(dataMachines);
    createInitTable(dataMachines);
}

// Listen for messages
/* socket.addEventListener('message', function (event) {
    var dataMachines = JSON.parse(event.data);
    console.log(dataMachines);
    createInitTable(dataMachines);

    function refresh() {
        $('table').load('index.html table');
    }
}); */

function createInitTable(dataMachines) {
    $('#A').text(dataMachines[0]._name);
    $('#AState').text(dataMachines[0]._state);
    $('#B').text(dataMachines[1]._name);
    $('#BState').text(dataMachines[1]._state);
    $('#C').text(dataMachines[2]._name);
    $('#CState').text(dataMachines[2]._state);
};