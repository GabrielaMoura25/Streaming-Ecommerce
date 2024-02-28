import styled from "styled-components";
import { Alert, Card } from "react-bootstrap/";

export const StyledCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 3rem 3rem;
	min-height: 50vh;
`;

export const Title = styled.h3`
	text-align: center;
	margin-top: 2rem;
`;

export const ErrorAlert = styled(Alert)`
	background-color: #050505;
	color: white;
	text-align: center;
	margin: auto auto;
`;

export const StyledCard = styled(Card)`
	background-color: #f0f0f0;
	border: 1px solid #bdbdbd;
	width: 18rem;
	margin: 3rem auto 1rem auto;
	transition: transform 0.3s ease;
	&:hover {
		transform: translateY(-6px);
	}
`;
