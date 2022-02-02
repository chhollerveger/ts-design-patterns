import Token from "../utils/token";
import IMercadoPago from "./i-mercado-pago";

export default class MercadoPago implements IMercadoPago {

  private token: Token;

  authToken(): Token {
    return new Token();
  }

  enviarPagamento(): void {
    this.token = this.authToken();
    console.log(`Token => ${this.token.getToken()}`);
    console.log("Enviando pagamentos via Mercado Pago.");
  }

  receberPagamento(): void {
    console.log("Recebendo pagamentos via Mercado Pago.");
  }

}