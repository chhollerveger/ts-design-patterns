import IPlataform from "./i-plataform";

export default class YouTube implements IPlataform {

  constructor() {
    this.configureRMTP();
    console.log("YouTube: broadcast started!");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("YouTube: configuring the broadcasting.");
  }

  authToken(): void {
    console.log("YouTube: authorizing the application!");
  }

}