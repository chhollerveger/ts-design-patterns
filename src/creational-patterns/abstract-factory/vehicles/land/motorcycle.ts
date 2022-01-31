import ILandVehicle from "./interfaces/i-land-vehicle";

export default class Motorcycle implements ILandVehicle {

  startRoute(): void {
    this.getCargo();
    console.log("Starting delivery...");
  }

  getCargo(): void {
    console.log("We already received the order!");
  }

}