class Subject {
    constructor(state){
        this._state = state;
        this.observers = [];
    }

    setState(s) {   //change object state
        this._state = s;
        this.notifyAllObservers();
    }

    attachObserver(o) {   //subscribe method
        this.observers.push(o);
    }

    notifyAllObservers(...args){   //notify method
        this.observers.forEach(observer => observer.update(this, ...args));
    }
};

module.exports = { Subject };