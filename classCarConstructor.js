class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
    }

    drive(distance) {
        const maxDistance = this.tank *  this.milesPerGallon;

        if (distance < maxDistance) {
            this.odometer += distance;
            this.tank -= distance / this.milesPerGallon;
        } else {
            this.odometer += maxDistance;
            this.tank = 0;

            return `I ran out of fuel at ${this.odometer} miles!`;
        }
    }
}

const myCar = new Car('Mercedes', 50);
myCar.fill(5);
myCar.drive(100);
