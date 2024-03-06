/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";

import {
  StyledCards,
  ErrorAlert,
  StyledCard,
  SuccessAlert,
  Title,
} from "./StyledAllCards";

import { getCards } from "../../services/cardServices";
import { postCarts } from "../../services/cartServices";

import { ICreateStreaming } from "../../interfaces/ICreateStreaming";
import { IJwtPayload } from "../../interfaces/IJwtPayload";

import noImage from "../../assets/images/no-image.jpg";
import Pagination from "../Pagination";
// import { BiInfoCircle } from "react-icons/bi";
// import { HiInformationCircle } from "react-icons/hi";

const limit: number = 12;

const CardStreaming: React.FC<ICreateStreaming> = () => {
  const [streaming, setStreaming] = useState<ICreateStreaming[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [info, setInfo] = useState();
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await getCards(limit, offSet);
        setStreaming(response.data);
        setInfo(response.data.length);

        console.log(response.data.length);
      } catch (error: any) {
        handleError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, [offSet]);

  const handleError = (message: string) => {
    setErrorMessage(message);
    setTimeout(clearError, 2000);
  };

  const clearError = () => {
    setErrorMessage("");
  };

  const handleSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(clearSuccess, 2000);
  };

  const clearSuccess = () => {
    setSuccessMessage("");
  };

  const addCardToCart = async (dataStreaming: ICreateStreaming) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Por favor, realize o login!");

      const decodedToken: IJwtPayload = jwtDecode(token);
      const userId = decodedToken.id;

      const data: any = {
        streamingId: dataStreaming.id,
        userId,
        quantity: 1,
        price: dataStreaming.value,
      };

      await postCarts(data);
      handleSuccess("Streaming adicionado ao carrinho!");
    } catch (error: any) {
      handleError("Erro ao adicionar streaming no carrinho");
    }
  };

  const renderLoading = () => (
    <Spinner style={{ margin: "auto auto" }} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  const renderError = () => (
    <ErrorAlert key="danger" variant="danger">
      <Spinner animation="grow" size="sm" /> {errorMessage}
    </ErrorAlert>
  );

  const renderSuccess = () => (
    <SuccessAlert key="danger" variant="success">
      <Spinner animation="grow" size="sm" /> {successMessage}
    </SuccessAlert>
  );

  return (
    <>
      <Title>Ofertas feitas para você</Title>

      <StyledCards>
        {loading && renderLoading()}
        {errorMessage && renderError()}
        {successMessage && renderSuccess()}

        {streaming.map((card) => (
          <StyledCard
            key={card.id}
            style={{ width: "18rem", margin: "3rem auto 1rem auto" }}
          >
            {card.photo ? (
              <Card.Img
                variant="top"
                src={`http://localhost:8080/streaming/photos/${card.photo}`}
              />
            ) : (
              <Card.Img variant="top" src={noImage} />
            )}
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Button
                variant="primary"
                style={{ width: "100%" }}
                onClick={() => addCardToCart(card)}
              >
                Adicionar ao carrinho
              </Button>
            </Card.Body>
          </StyledCard>
        ))}

        {info && (
          <Pagination
            limit={limit}
            total={info}
            offset={offSet}
            setOffSet={setOffSet}
          />
        )}
      </StyledCards>
    </>
  );
};

export default CardStreaming;
