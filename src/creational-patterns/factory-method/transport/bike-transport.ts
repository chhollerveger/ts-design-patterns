import Transport from "./transport";
import Bike from "./vehicles/bike";
import IVehicle from "./vehicles/interfaces/i-vehicle";


export class BikeTransport extends Transport {

  protected createTransport(): IVehicle {

    return new Bike();

  }

}