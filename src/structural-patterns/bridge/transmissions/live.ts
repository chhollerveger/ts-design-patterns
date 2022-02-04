import IPlataform from "../plataforms/i-plataform";
import ITransmission from "./i-transmission";

export default class Live implements ITransmission {

  constructor(protected plataform: IPlataform) { }

  broadcasting(): void {
    console.log("Starting broadcast!");
  }

  result(): void {
    console.log("****** ON AIR ******");
  }

}