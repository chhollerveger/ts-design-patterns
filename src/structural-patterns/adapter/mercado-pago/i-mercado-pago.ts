import Token from "../utils/token";

export default interface IMercadoPago {

  authToken(): Token;
  enviarPagamento(): void;
  receberPagamento(): void;

}