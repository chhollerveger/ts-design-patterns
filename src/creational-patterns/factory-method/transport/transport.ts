import IVehicle from "./vehicles/interfaces/i-vehicle";

export default abstract class Transport {

  startTransport(): void {

    let vehicle = this.createTransport();
    vehicle.startRoute();

  }

  protected abstract createTransport(): IVehicle;

}
