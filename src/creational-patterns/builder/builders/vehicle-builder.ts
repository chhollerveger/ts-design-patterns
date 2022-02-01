import ETransmission from "../components/e-transmission";
import EVehicleType from "../components/e-vehicle-type";
import Engine from "../components/engine";
import Wheel from "../components/wheel";
import Vehicle from "../products/vehicle";
import IBuilder from "./i-builder";


export default class VehicleBuilder implements IBuilder {

  private vehicle = new Vehicle();

  setVehicleType(vehicleType: EVehicleType): void {
    this.vehicle.vehicleType = vehicleType;
  }

  setSeats(seats: number): void {
    this.vehicle.seats = seats;
  }

  setEngine(engine: Engine): void {
    this.vehicle.engine = engine;
  }

  setTrasmission(transmission: ETransmission): void {
    this.vehicle.transmission = transmission;
  }

  addWheel(wheel: Wheel) {
    this.vehicle.addWheel(wheel);
  }

  reset() {
    this.vehicle = new Vehicle();
  }

  getVehicle() {
    const result: Vehicle = this.vehicle;
    this.reset();
    return result;
  }

}