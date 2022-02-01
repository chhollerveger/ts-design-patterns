import ETransmission from "../components/e-transmission";
import EVehicleType from "../components/e-vehicle-type";
import Engine from "../components/engine";
import Wheel from "../components/wheel";

export default class Vehicle {

  private _vehicleType: EVehicleType;
  private _seats: number;
  private _engine: Engine;
  private _transmission: ETransmission;
  private _wheels: Wheel[] = [];

  addWheel(wheel: Wheel) {
    this._wheels.push(wheel);
  }

  get wheels(): Wheel[] {
    return this._wheels;
  }

  get wheelsTotal(): number {
    return this._wheels.length;
  }

  get vehicleType(): EVehicleType {
    return this._vehicleType;
  }

  set vehicleType(vehicleType: EVehicleType) {
    this._vehicleType = vehicleType;
  }

  get seats(): number {
    return this._seats;
  }

  set seats(seats: number) {
    this._seats = seats;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(engine: Engine) {
    this._engine = engine;
  }

  get transmission(): ETransmission {
    return this._transmission;
  }

  set transmission(transmission: ETransmission) {
    this._transmission = transmission;
  }

}