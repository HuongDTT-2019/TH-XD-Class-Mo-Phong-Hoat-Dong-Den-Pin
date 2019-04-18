let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    }
};
let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.light = function () {
        if (this.status) {
            console.log("Lighting");
        } else {
            console.log("Not lighting");
        }
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOf = function () {
        this.status = false;
    }

};
let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

console.log("Battery info: "+flashLamp.getBatteryInfo());
flashLamp.light();

console.log("turn on...");
flashLamp.turnOn();
flashLamp.light();
battery.decreaseEnergy();
console.log("Battery info: "+flashLamp.getBatteryInfo());

console.log("turn off...");
flashLamp.turnOf();
flashLamp.light();