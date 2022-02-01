import ETransmission from "../components/e-transmission";
import EVehicleType from "../components/e-vehicle-type";
import Engine from "../components/engine";
import Wheel from "../components/wheel";
import Vehicle from "../products/vehicle";


export default interface IBuilder {

  reset(): void;
  getVehicle(): Vehicle;
  addWheel(wheel: Wheel): void;
  setVehicleType(vehicleType: EVehicleType): void;
  setSeats(seats: number): void;
  setEngine(engine: Engine): void;
  setTrasmission(transmission: ETransmission): void;

}
