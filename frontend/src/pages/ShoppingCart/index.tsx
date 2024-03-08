import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BiSolidError } from "react-icons/bi";

import PaymentForm from "../../components/BoxPayment";

import {
  ContainerOneStyles,
  ContainerTwoStyles,
  LinkStyles,
  ContainerAlert,
} from "./ShoppingStyled";

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
        <ContainerOneStyles>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </ContainerOneStyles>
      ) : (
        <ContainerTwoStyles>
          <ContainerAlert>
            <h3>
              Carrinho vázio <BiSolidError style={{ color: "#dfdb05" }} />
            </h3>
            <p>
              Por favor, realize o <LinkStyles to={"/login"}>login</LinkStyles>
            </p>
          </ContainerAlert>
        </ContainerTwoStyles>
      )}
    </>
  );
}
