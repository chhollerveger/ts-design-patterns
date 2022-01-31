import IAircraft from "./interfaces/i-aircraft";

export default class Helicopter implements IAircraft {

  startRoute(): void {
    this.wind();
    this.getCargo();
    console.log("Starting takeoff...");
  }

  getCargo(): void {
    console.log("Passengers ok, turning on the propellers...");
  }

  wind(): void {
    console.log("Winds at 25km, Southeast, winds ok!");
  }

}