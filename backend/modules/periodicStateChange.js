function periodicStateChange(...machines) {
    pickMachine(...machines);
};

function pickMachine(...machines) {     //emulating a machine on the production line changing state by picking a random machine to setState
    var machinePick = Math.floor(Math.random()*3) + 1; //returns random integer between 1 and 3
    var state = pickState();
    switch (machinePick) {
        case 1:
            machines[0].setState(state);
            break;
        case 2:
            machines[1].setState(state);
            break; 
        case 3:
            machines[2].setState(state);
            break;
    }
};

function pickState(state) {     //picking a random state to change the machine to
    var randomStatePick = Math.floor(Math.random()*3) + 1;

    switch (randomStatePick) { 
        case 1:
            state = 'IDLE';
            return state;
        case 2:
            state = 'PRODUCING';
            return state;
        case 3:
            state = 'STARVED';
            return state;
    }
};

module.exports = { periodicStateChange };