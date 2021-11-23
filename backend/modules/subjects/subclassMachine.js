const Subject = require('./subjectClass').Subject;

class Machine extends Subject {
    constructor(state, name){
        super(state);
        this._name = name;
    }
};

module.exports = { Machine };