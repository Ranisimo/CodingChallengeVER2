const Machine = require('./subjects/subclassMachine').Machine;
const Dashboard = require('./observers/subclassDashboard').Dashboard;
const stateChanger = require('./periodicStateChange').periodicStateChange;

var machines = [];

function init() {
    const MachineA = new Machine("IDLE", "Machine A");
    const MachineB = new Machine("IDLE", "Machine B");
    const MachineC = new Machine("IDLE", "Machine C");
    const MainDashboard = new Dashboard("Main Dashboard");

    machines.push(MachineA, MachineB, MachineC);

    MachineA.attachObserver(MainDashboard);
    MachineB.attachObserver(MainDashboard);
    MachineC.attachObserver(MainDashboard);

    setInterval(function(){
        stateChanger(...machines);
        console.log(machines);
    }, 10000);
}

module.exports = { init, machines };