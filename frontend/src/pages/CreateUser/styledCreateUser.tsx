import { Button, Alert } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled.div`
	font-family: "Amiko", sans-serif;
	max-width: 30rem;
	margin: 0 auto;
	margin-top: 3rem;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #fff;
	color: #f5f5f5;
	min-height: 50vh;
`;

export const StyledLink = styled.div`
	color: #f5f5f5;
	transition: color 0.3s;
	&:hover {
		color: #4d9bee;
	}
`;

export const Title = styled.h3`
	text-align: center;
	color: white;
`;

export const Description = styled.p`
	text-align: center;
	margin-top: 10px;
`;

export const ErrorAlert = styled(Alert)`
	background-color: #dc3545;
	color: white;
	text-align: center;
`;

export const SuccessAlert = styled(Alert)`
	background-color: #30a14e;
	color: white;
	text-align: center;
`;

export const RegisterButton = styled(Button)`
	width: 100%;
	margin-top: 1rem;
`;
