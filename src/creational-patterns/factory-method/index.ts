import { BikeTransport } from "./transport/bike-transport";
import { CarTransport } from "./transport/car-transport";
import Service from "./transport/consts/service";
import { MotorcycleTransport } from "./transport/motorcycle-transport";
import Transport from "./transport/transport";

const service = Service.BIKE;
let transport: Transport;

switch (service) {

  case Service.CAR:
    transport = new CarTransport();
    break;

  case Service.MOTORCICLE:
    transport = new MotorcycleTransport();
    break;

  case Service.BIKE:
    transport = new BikeTransport();
    break;

  default:
    console.log("Unknown service!");

}

transport.startTransport();
