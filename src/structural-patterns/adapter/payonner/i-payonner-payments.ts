import Token from "../utils/token";

export default interface IPayonnerPayments {

  authToken(): Token;
  sendPayment(): void;
  receivePayment(): void;

}