import Token from "../utils/token";
import IPayPalPayments from "./i-paypal-payments";

export default class PayPal implements IPayPalPayments {

  private token: Token;

  authToken(): Token {
    return new Token();
  }

  paypalPayment(): void {
    this.token = this.authToken();
    console.log(`Token => ${this.token.getToken()}`);
    console.log("Sending payments via PayPal.");
  }

  paypalReceive(): void {
    console.log("Receiving payments via PayPal.");
  }

}