import IVehicle from "./interfaces/i-vehicle";

export default class Motorcycle implements IVehicle {

  startRoute(): void {
    this.getCargo();
    console.log("Starting delivery...");
  }

  getCargo(): void {
    console.log("We already received the order!");
  }

}