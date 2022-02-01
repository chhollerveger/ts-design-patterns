import IBuilder from "../builders/i-builder";
import ETransmission from "../components/e-transmission";
import EVehicleType from "../components/e-vehicle-type";
import Engine from "../components/engine";
import Wheel from "../components/wheel";


export default class Director {

  constructor(private builder: IBuilder) { }

  constructSedanCar() {

    this.builder.setVehicleType(EVehicleType.SEDAN);
    this.builder.setSeats(5);
    this.builder.setTrasmission(ETransmission.AUTOMATIC);
    this.builder.setEngine(new Engine(1600));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));

  }

  constructTruck() {

    this.builder.setVehicleType(EVehicleType.TRUCK);
    this.builder.setSeats(3);
    this.builder.setTrasmission(ETransmission.AUTOMATIC_SEQUENTIAL);
    this.builder.setEngine(new Engine(13000));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));

  }

  constructMotorcycle() {

    this.builder.setVehicleType(EVehicleType.MOTORCYCLE);
    this.builder.setEngine(new Engine(150));
    this.builder.setTrasmission(ETransmission.MANUAL);
    this.builder.setSeats(1);
    this.builder.addWheel(new Wheel(18));
    this.builder.addWheel(new Wheel(18));

  }

}
