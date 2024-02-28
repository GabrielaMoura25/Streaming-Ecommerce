import styled from "styled-components";
import { Alert, Form } from "react-bootstrap";

export const StyledForm = styled(Form)`
	min-height: 30rem;
	max-width: 20rem;
	margin: 2rem 2rem 0 auto;
	background-color: #212529;
	padding: 1rem;
	color: #fff;
	border-radius: 5px;
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
