import ILandVehicle from "./interfaces/i-land-vehicle";

export default class Scooter implements ILandVehicle {

  startRoute(): void {
    this.getCargo();
    console.log("Starting entry with scooter...");
  }

  getCargo(): void {
    console.log("Order in the backpack!");
  }

}