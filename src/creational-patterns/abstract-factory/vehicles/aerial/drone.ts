import IAircraft from "./interfaces/i-aircraft";

export default class Drone implements IAircraft {

  startRoute(): void {
    this.wind();
    this.getCargo();
    console.log("Starting takeoff and flight...");
  }

  getCargo(): void {
    console.log("Load coupled.");
  }

  wind(): void {
    console.log("No winds, winds ok!");
  }

}