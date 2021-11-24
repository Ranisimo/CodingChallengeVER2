// Establishing WebSocket connection
const client = new WebSocket('ws://localhost:3000');

$(document).ready(function () {

    client.onopen = () => {
        client.send('Message From Client');
    };

    client.onerror = (error) => {
        client.log(`WebSocket error: ${error}`)
    };

    client.onmessage = (e) => {
        var dataMachines = JSON.parse(e.data);
        createInitTable(dataMachines);
    };

    client.onclose = function(e) {
        console.log("WebSocket is closed now.");
    };

    function createInitTable(dataMachines) { // Takes JSON data sent and uses the '_name' key to match with the <tr> id and then edit the last <td>
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