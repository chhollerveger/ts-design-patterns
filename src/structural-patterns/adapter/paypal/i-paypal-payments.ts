import Token from "../utils/token";

export default interface IPayPalPayments {

  authToken(): Token;
  paypalPayment(): void;
  paypalReceive(): void;

}