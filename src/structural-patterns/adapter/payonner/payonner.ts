import Token from "../utils/token";
import IPayonnerPayments from "./i-payonner-payments";

export default class Payonner implements IPayonnerPayments {

  private token: Token;

  authToken(): Token {
    return new Token();
  }

  sendPayment(): void {
    this.token = this.authToken();
    console.log(`Token => ${this.token.getToken()}`);
    console.log("Sending payments via Payoneer.");
  }

  receivePayment(): void {
    console.log("Receiving payments via Payoneer.");
  }

}