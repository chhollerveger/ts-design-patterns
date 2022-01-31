import IAircraft from "./interfaces/i-aircraft";

export default class Airplane implements IAircraft {

  startRoute(): void {
    this.wind();
    this.getCargo();
    console.log("Starting takeoff...");
  }

  getCargo(): void {
    console.log("We've picked up the passengers, we're ready!");
  }

  wind(): void {
    console.log("Winds at 25km, winds ok!");
  }

}