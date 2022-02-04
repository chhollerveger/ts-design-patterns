import IPlataform from "./i-plataform";

export default class Facebook implements IPlataform {

  constructor() {
    this.configureRMTP();
    console.log("Facebook: broadcast started!");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Facebook: configuring the broadcasting.");
  }

  authToken(): void {
    console.log("Facebook: authorizing the application!");
  }

}