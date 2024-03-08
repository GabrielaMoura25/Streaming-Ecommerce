import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, Button, Spinner } from "react-bootstrap";

import { ContainerStyles, ErrorAlert, TitleStyles, CardStyles } from "./SearchStyled";
import { getCardsTitle } from "../../services/cardServices";
import { IStreaming } from "../../interfaces/IStreaming";

import noImage from "../../assets/images/no-image.jpg";

const Search: React.FC<IStreaming> = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("title");

	const [streamings, setStreamings] = useState<IStreaming[]>([]);
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const response = await getCardsTitle(query);
				setStreamings(response.data);
				setLoading(false);
			} catch (error: any) {
				setErrorMessage(error.message);
				setStreamings([]);
				setTimeout(() => {
					setErrorMessage(null);
				}, 2000);

				setLoading(false);
			}
		};
		fetchCards();
	}, [query]);

	function BasicExample() {
		return (
			<Spinner style={{ margin: "auto auto" }} animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	}

	return (
		<>
			<TitleStyles>Resultado para: {query}</TitleStyles>
			<ContainerStyles>
				{loading && BasicExample()}
				{errorMessage && (
					<ErrorAlert key="danger" variant="danger">
						{errorMessage}
					</ErrorAlert>
				)}

				{streamings.map((card: any) => (
					<CardStyles key={card.id}>
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
							<Card.Title>R$ {card.value}</Card.Title>
							<Card.Text>{card.description}</Card.Text>
							<Button style={{ width: '100%'}} variant="primary">Adicionar ao carrinho</Button>
						</Card.Body>
					</CardStyles>
				))}
			</ContainerStyles>
		</>
	);
};

export default Search;
