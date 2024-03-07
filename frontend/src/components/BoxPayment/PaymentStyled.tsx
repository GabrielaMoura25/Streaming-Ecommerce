import styled from "styled-components";
import { Alert, Form } from "react-bootstrap";

export const StyledForm = styled(Form)`
  min-height: 30rem;
  min-width: 22rem;
  margin: 2rem;
  background-color: #212529;
  padding: 1rem;
  color: #fff;
  border-radius: 5px;
  position: fixed;
	z-index: 9999;
	right: 2rem;
	top: 4rem;
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
