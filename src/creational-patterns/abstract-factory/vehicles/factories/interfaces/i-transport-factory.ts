import IAircraft from "../../aerial/interfaces/i-aircraft";
import ILandVehicle from "../../land/interfaces/i-land-vehicle";

export default interface ITransportFactory {

  createTransportVehicle(): ILandVehicle;
  createTransportAircraft(): IAircraft;

}