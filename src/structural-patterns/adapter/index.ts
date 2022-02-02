import MercadoPagoAdapter from "./adapters/mercado-pago-adapter";
import PayonnerAdapter from "./adapters/payonner-adapter";
import MercadoPago from "./mercado-pago/mercado-pago";
import Payonner from "./payonner/payonner";
import IPayPalPayments from "./paypal/i-paypal-payments";
import PayPal from "./paypal/paypal";

// const payment: IPayPalPayments = new PayPal();

// const payonner = new Payonner();
// const payment: IPayPalPayments = new PayonnerAdapter(payonner);

const mercadoPago = new MercadoPago();
const payment: IPayPalPayments = new MercadoPagoAdapter(mercadoPago);

payment.paypalPayment();
payment.paypalReceive();