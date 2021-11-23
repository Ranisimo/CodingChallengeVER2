const Observer = require('./observerClass').Observer;

class Dashboard extends Observer {
    constructor(name, role){
        super(name);
    }

    update(...args) {
        [...args].forEach((arg) => {
            console.log(this._name, arg._name, arg._state);
        });
    }
};

module.exports = { Dashboard };