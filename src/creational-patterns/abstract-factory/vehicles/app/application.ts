import IAircraft from "../aerial/interfaces/i-aircraft";
import ITransportFactory from "../factories/interfaces/i-transport-factory";
import ILandVehicle from "../land/interfaces/i-land-vehicle";

export default class Application {

  private vehicle: ILandVehicle;
  private aircraft: IAircraft;

  constructor(factory: ITransportFactory) {

    this.vehicle = factory.createTransportVehicle();
    this.aircraft = factory.createTransportAircraft();

  }

  startRoute(): void {

    this.vehicle.startRoute();
    this.aircraft.startRoute();

  }

}