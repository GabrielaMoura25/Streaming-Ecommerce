import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../components/BoxPayment";
import BoxCards from "../../components/BoxCards";

import { Container } from "./ShoppingCartStyled";

const stripePromise = loadStripe(
  import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY
);

export default function ShoppingCart() {
  return (
    <Container>
      <BoxCards />
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </Container>
  );
}
