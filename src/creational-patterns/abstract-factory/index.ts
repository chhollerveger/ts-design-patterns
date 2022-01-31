import Application from "./vehicles/app/application";
import Company from "./vehicles/consts/company";
import ITransportFactory from "./vehicles/factories/interfaces/i-transport-factory";
import LimeTransport from "./vehicles/factories/lime-transport";
import NineNineTransport from "./vehicles/factories/nine-nine-transport";
import UberTransport from "./vehicles/factories/uber-transport";

const currentCompany = Company.LIME;
let factory: ITransportFactory;

switch (currentCompany) {

    case Company.UBER:
        factory = new UberTransport();
        break;

    case Company.NINENINE:
        factory = new NineNineTransport();
        break;

    case Company.LIME:
        factory = new LimeTransport();
        break;

    default:
        console.log("Unknown company!");

}

const app = new Application(factory);

app.startRoute();
