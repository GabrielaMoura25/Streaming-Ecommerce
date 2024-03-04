import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap/";
import { jwtDecode } from "jwt-decode";

import { getAllCarts } from "../../services/cartServices";
import { ICart } from "../../interfaces/ICart";

import { StyledContainer } from "./BoxStyled";
import { IDecodedToken } from "../../interfaces/IDecodedToken";

const BoxCards = () => {
  const [streamings, setStreamings] = useState<ICart[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token: string | null = await localStorage.getItem("token");
        
        if(token) {
          const decodedToken: IDecodedToken = await jwtDecode(token);

        const response = await getAllCarts(decodedToken.id);
        console.log(response.data);
        setStreamings(response.data);
        } else {
          throw new Error('Token inválido!');
        }
      } catch (error: any) {
        console.log("Erro ao buscar streamings do carrinho: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledContainer>
      {streamings.map((streaming) => (
        <Card style={{ marginBottom: "1rem" }} className="card text-bg-dark">
          <Card.Header>{streaming.streamingId}</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </StyledContainer>
  );
};

export default BoxCards;
