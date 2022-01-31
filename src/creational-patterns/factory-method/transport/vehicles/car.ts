import IVehicle from "./interfaces/i-vehicle";

export default class Car implements IVehicle {

  startRoute(): void {
    this.getCargo();
    console.log("Starting the way...");
  }

  getCargo(): void {
    console.log("We've picked up the passengers, we're ready!");
  }

}