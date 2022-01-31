import IVehicle from "./interfaces/i-vehicle";

export default class Bike implements IVehicle {

  startRoute(): void {
    this.getCargo();
    console.log("Starting bike delivery...");
  }

  getCargo(): void {
    console.log("We already received the order!");
  }

}