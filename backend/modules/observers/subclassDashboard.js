const Observer = require('./observerClass').Observer;

class Dashboard extends Observer {
    constructor(name, role){
        super(name);
    }

    update(...args) {
        [...args].forEach((arg) => {
            let argName = arg._name;
            let argState = arg._state;
            let obj = {name: argName, state: argState};
            wss.clients.forEach(function each(ws) {
                ws.send(JSON.stringify(obj));
                console.log(obj);
            })
        });
    }
};

module.exports = { Dashboard };