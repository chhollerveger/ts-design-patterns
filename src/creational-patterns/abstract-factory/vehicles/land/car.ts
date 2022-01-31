import ILandVehicle from "./interfaces/i-land-vehicle";

export default class Car implements ILandVehicle {

  startRoute(): void {
    this.getCargo();
    console.log("Starting the way...");
  }

  getCargo(): void {
    console.log("We've picked up the passengers, we're ready!");
  }

}