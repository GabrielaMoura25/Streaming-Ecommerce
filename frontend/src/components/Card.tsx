import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface CardGenericProps {
    imageUrl: string;
    title: string;
    text: string;
    buttonText: string;
  }

  function CardGeneric({ imageUrl, title, text, buttonText }: CardGenericProps) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">{buttonText}</Button>
        </Card.Body>
      </Card>
    );
  }


export default CardGeneric;