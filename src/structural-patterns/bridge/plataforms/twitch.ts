import IPlataform from "./i-plataform";

export default class Twitch implements IPlataform {

  constructor() {
    this.configureRMTP();
    console.log("Twitch: broadcast started!");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Twitch: configuring the broadcasting...");
  }

  authToken(): void {
    console.log("Twitch: authorizing the application!");
  }

}