import Airplane from "../aerial/airplane";
import IAircraft from "../aerial/interfaces/i-aircraft";
import Car from "../land/car";
import ILandVehicle from "../land/interfaces/i-land-vehicle";
import ITransportFactory from "./interfaces/i-transport-factory";


export default class UberTransport implements ITransportFactory {

  createTransportVehicle(): ILandVehicle {
    return new Car();
  }
  createTransportAircraft(): IAircraft {
    return new Airplane();
  }

}