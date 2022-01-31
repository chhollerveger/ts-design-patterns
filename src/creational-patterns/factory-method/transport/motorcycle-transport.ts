import Transport from "./transport";
import IVehicle from "./vehicles/interfaces/i-vehicle";
import Motorcycle from "./vehicles/motorcycle";


export class MotorcycleTransport extends Transport {

  protected createTransport(): IVehicle {

    return new Motorcycle();

  }

}