import Payonner from "../payonner/payonner";
import IPayPalPayments from "../paypal/i-paypal-payments";
import Token from "../utils/token";

export default class PayonnerAdapter implements IPayPalPayments {

  private token: Token;

  constructor(private payonner: Payonner) {
    console.log("Adapting Payonner using standard PayPal methods.");
  }

  authToken(): Token {
    return new Token();
  }

  paypalPayment(): void {
    return this.payonner.sendPayment();
  }

  paypalReceive(): void {
    return this.payonner.receivePayment();
  }

}