import { Card, Button } from "react-bootstrap/";

import { StyledContainer } from "./BoxStyled";

import { removerCart } from "../../services/cartServices";

import { ICart } from "../../interfaces/ICart";

interface Props {
  streamings: ICart[];
  setStreamings: React.Dispatch<React.SetStateAction<ICart[]>>;
}

const BoxCards: React.FC<Props> = ({ streamings, setStreamings }) => {
  const removerItem = async (idStreaming: any) => {
    try {
      await removerCart(idStreaming);

      setStreamings((prevStreamings) =>
        prevStreamings.filter((streaming) => streaming.id !== idStreaming)
      );
    } catch (error) {
      console.log("Erro ao remover streaming do carrinho", error);
    }
  };

  return (
    <StyledContainer>
      {streamings.map((streaming) => (
        <Card style={{ marginBottom: "1rem" }} className="card text-bg-dark">
          <Card.Header>{streaming.title}</Card.Header>
          <Card.Body>
            <Card.Title>Valor: R$ {streaming.price}</Card.Title>
            <Card.Text>{streaming.description}</Card.Text>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => removerItem(streaming.id)}
            >
              Remover item
            </Button>
          </Card.Body>
        </Card>
      ))}
    </StyledContainer>
  );
};

export default BoxCards;
