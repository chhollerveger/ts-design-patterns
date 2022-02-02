import MercadoPago from "../mercado-pago/mercado-pago";
import Payonner from "../payonner/payonner";
import IPayPalPayments from "../paypal/i-paypal-payments";
import Token from "../utils/token";

export default class MercadoPagoAdapter implements IPayPalPayments {

  private token: Token;

  constructor(private mercadoPago: MercadoPago) {
    console.log("Adaptando o Mercado Pago usando métodos padrão do PayPal.");
  }

  authToken(): Token {
    return new Token();
  }

  paypalPayment(): void {
    return this.mercadoPago.enviarPagamento();
  }

  paypalReceive(): void {
    return this.mercadoPago.receberPagamento();
  }

}