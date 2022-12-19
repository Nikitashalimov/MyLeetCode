class ParkingSystem {
    parkingSpaces: number[] = [0,0,0];
    parkedCars: number[] = [0,0,0];

    constructor(big: number, medium: number, small: number) {
        this.parkingSpaces = [big, medium, small];
    }

    addCar(carType: number): boolean {
        if(this.parkedCars[carType - 1] < this.parkingSpaces[carType - 1]) {
            this.parkedCars[carType - 1]++;
            return true;
        }
        return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */