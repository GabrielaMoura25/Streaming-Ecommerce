import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { BiSolidError } from "react-icons/bi";

import PaymentForm from "../../components/BoxPayment";
import BoxCards from "../../components/BoxCards";

import {
  Container,
  Container2,
  StyledLink,
  ContainerAlert,
} from "./ShoppingCartStyled";

const stripePromise = loadStripe(
  import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY
);

const verifyToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }
  return true;
};

export default function ShoppingCart() {
  return (
    <>
      {verifyToken() ? (
        <Container>
          <BoxCards />
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </Container>
      ) : (
        <Container2>
          <ContainerAlert>
            <h3>
              Carrinho vázio <BiSolidError style={{ color: "#dfdb05" }} />
            </h3>
            <p>
              Por favor, realize o <StyledLink to={"/login"}>login</StyledLink>
            </p>
          </ContainerAlert>
        </Container2>
      )}
    </>
  );
}
