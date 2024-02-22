import styled from "styled-components";
import { Alert } from "react-bootstrap/";

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
`;
