import Drone from "../aerial/drone";
import IAircraft from "../aerial/interfaces/i-aircraft";
import ILandVehicle from "../land/interfaces/i-land-vehicle";
import Scooter from "../land/scooter";
import ITransportFactory from "./interfaces/i-transport-factory";


export default class LimeTransport implements ITransportFactory {

  createTransportVehicle(): ILandVehicle {
    return new Scooter();
  }
  createTransportAircraft(): IAircraft {
    return new Drone();
  }

}