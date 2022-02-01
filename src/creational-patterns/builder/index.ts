import VehicleBuilder from "./builders/vehicle-builder";
import Director from "./director/director";
import Vehicle from "./products/vehicle";


const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();
const sedan: Vehicle = builder.getVehicle();
console.log(`Created a vehicle of the type ${sedan.vehicleType} with ${sedan.wheelsTotal} wheels.`);

director.constructTruck();
const truck: Vehicle = builder.getVehicle();
console.log(`Created a vehicle of the type ${truck.vehicleType} with ${truck.wheelsTotal} wheels.`);

director.constructMotorcycle();
const motorcycle: Vehicle = builder.getVehicle();
console.log(`Created a vehicle of the type ${motorcycle.vehicleType} with ${motorcycle.wheelsTotal} wheels.`);
