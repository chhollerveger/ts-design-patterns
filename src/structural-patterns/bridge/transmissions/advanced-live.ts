import IPlataform from "../plataforms/i-plataform";
import Live from "./live";

export default class AdvancedLive extends Live {

  constructor(protected plataform: IPlataform) {
    super(plataform);
  }

  subtitles(): void {
    console.log("Subtitles Enabled!");
  }

  comments(): void {
    console.log("Comments released!");
  }

}