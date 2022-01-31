import Helicopter from "../aerial/helicopter";
import IAircraft from "../aerial/interfaces/i-aircraft";
import ILandVehicle from "../land/interfaces/i-land-vehicle";
import Motorcycle from "../land/motorcycle";
import ITransportFactory from "./interfaces/i-transport-factory";


export default class NineNineTransport implements ITransportFactory {

  createTransportVehicle(): ILandVehicle {
    return new Motorcycle();
  }
  createTransportAircraft(): IAircraft {
    return new Helicopter();
  }

}