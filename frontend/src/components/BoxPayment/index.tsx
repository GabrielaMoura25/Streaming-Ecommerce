import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";

import { ErrorAlert, SuccessAlert, StyledForm } from "./PaymentStyled";

import { getAllCarts } from "../../services/cartServices";
import { paymentService } from "../../services/paymentService";

import { ICart } from "../../interfaces/ICart";
import { IDecodedToken } from "../../interfaces/IDecodedToken";

import BoxCards from "../BoxCards";

import "./cardElement.css";

const PaymentForm = () => {
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [streamings, setStreamings] = useState<ICart[]>([]);
  const [amount, setAmount] = useState("");

  const TotalValueWithoutPoint = amount.toString().replace('.', '');
  const TotalValueInCents: number = Number(TotalValueWithoutPoint);

  console.log(TotalValueInCents);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token: string | null = await localStorage.getItem("token");

        if (token) {
          const decodedToken: IDecodedToken = await jwtDecode(token);

          const response = await getAllCarts(decodedToken.id);
          console.log(response.data);
          setStreamings(response.data);
        } else {
          throw new Error("Token inválido!");
        }
      } catch (error: any) {
        console.log("Erro ao buscar streamings do carrinho: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const totalSum = () => {
      let sum = 0;

      for (let i = 0; i < streamings.length; i++) {
        sum = sum + streamings[i].price;
        console.log(sum);
      }

      const convertToNumber = Number(sum);
      const roundedValue = convertToNumber.toFixed(2);
      setAmount(roundedValue);
      return;
    };

    totalSum();
  }, [streamings]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!,
    });

    setLoading(false);

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    try {
      await paymentService({
        amount: TotalValueInCents,
        token: paymentMethod,
      });

      setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 2000);

      setSuccessMessage("Pagamento realizado com sucesso!");
    } catch (error: any) {
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BoxCards streamings={streamings} setStreamings={setStreamings} />

      <StyledForm onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center" }}>Finalizar compras</h3>
        <div style={{ height: "5rem", margin: "2rem auto" }}>
          <p>Quantidade de itens: {streamings.length}</p>
          <h2>R$ {amount}</h2>
        </div>

        <CardElement className="card-element" />
        <Button
          style={{ marginTop: "1rem", width: "100%" }}
          variant="primary"
          type="submit"
          disabled={!stripe || loading}
        >
          {loading ? "Processando..." : "Finalizar Compra"}
        </Button>

        <Link to={"/"}>
          <Button
            style={{ margin: "1rem auto 2rem auto", width: "100%" }}
            variant="outline-danger"
          >
            Cancelar
          </Button>
        </Link>

        {errorMessage && (
          <ErrorAlert key="danger" variant="danger">
            {errorMessage}
          </ErrorAlert>
        )}

        {successMessage && (
          <SuccessAlert key="success" variant="success">
            {successMessage}
          </SuccessAlert>
        )}
      </StyledForm>
    </>
  );
};
export default PaymentForm;
