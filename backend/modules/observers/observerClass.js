class Observer {
    constructor(name){
        this._name = name;
    }

    update(){
        console.log("Subscribed observer updated");
    }
};

module.exports = { Observer };