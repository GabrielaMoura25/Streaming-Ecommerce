import styled from "styled-components";
import { Alert, Card } from "react-bootstrap/";

export const Title = styled.h2`
	text-align: center;
	margin-top: 1.5rem;
`;

export const StyledCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 3rem 3rem;
	min-height: 50vh;
`;

export const ErrorAlert = styled(Alert)`
	background-color: #e41749;
	position: fixed;
	z-index: 9999;
	color: white;
	right: 2rem;
	top: 2rem;
`;

export const SuccessAlert = styled(Alert)`
	background-color: #30a14e;
	position: fixed;
	z-index: 9999;
	color: white;
	right: 2rem;
	top: 2rem;
`;

export const StyledCard = styled(Card)`
	background-color: #f0f0f0;
	border: 1px solid #bdbdbd;
	transition: transform 0.3s ease;
	&:hover {
		transform: translateY(-6px);
	}
`;
