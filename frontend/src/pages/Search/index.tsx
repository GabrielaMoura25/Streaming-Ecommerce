import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";

import { StyledCards, ErrorAlert, Title, StyledCard } from "./styledSearch";
import { getCardsTitle } from "../../services/cardServices";

import noImage from "../../assets/images/no-image.jpg";

interface ICardStreaming {
	id: string;
	title: string;
	description: string;
	value: number;
	photo: string;
}

const Search: React.FC<ICardStreaming> = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("title");

	const [streamings, setStreamings] = useState<ICardStreaming[]>([]);
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
			<Title>Resultado para: {query}</Title>
			<StyledCards>
				{loading && BasicExample()}
				{errorMessage && (
					<ErrorAlert
						style={{ textAlign: "center", margin: "auto auto" }}
						key="danger"
						variant="danger"
					>
						{errorMessage}
					</ErrorAlert>
				)}

				{streamings.map((card: any) => (
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
							<Button variant="primary">Adicionar ao carrinho</Button>
						</Card.Body>
					</StyledCard>
				))}
			</StyledCards>
		</>
	);
};

export default Search;
