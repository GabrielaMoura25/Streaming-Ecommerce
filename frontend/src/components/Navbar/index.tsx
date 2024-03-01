import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaMagnifyingGlass, FaCartShopping, FaPlus } from "react-icons/fa6";

// import { IJwtPayload } from "../../Interfaces/IJwtPayload";

import logo from "../../assets/images/Streaming.png";

export default function NavScrollExample() {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (!search) return;

		navigate(`search-streaming?title=${search}`);
		setSearch("");
	};

	const tokenExists = () => {
		const token = localStorage.getItem("token");
		if (token) {
			return true;
		}
	};

	// Quero que seja mostrado para qualquer user a opções de add streamings
	// const verifiyUserAdmin = () => {
	// 	const token = localStorage.getItem("token");
	// 	if (token) {
	// 		const decodedToken: IJwtPayload = jwtDecode(token);
	// 		if (decodedToken.role === "admin") {
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// };

	const logoutUser = () => {
		localStorage.removeItem("token");
		window.location.href = "/";
	};

	return (
		<Navbar expand="lg" bg="primary" variant="dark">
			<Container fluid>
				<Navbar.Brand href="/">
					<img style={{ maxWidth: "10rem" }} src={logo} alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						{/* {verifiyUserAdmin() && (
							<Nav.Link href="/streaming/register">
								<FaPlus /> Adicionar Streaming
							</Nav.Link>
						)} */}
            <Nav.Link href="/streaming/register">
								<FaPlus /> Adicionar Streaming
							</Nav.Link>
					</Nav>

					<Nav
						className="justify-content-end"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="/shopping-cart">
							<FaCartShopping />
						</Nav.Link>

						{tokenExists() ? (
							<Nav.Link onClick={() => logoutUser()}>Logout</Nav.Link>
						) : (
							<>
								<Nav.Link href="/login">Login</Nav.Link>
								<Nav.Link href="/user/register">Sign up</Nav.Link>
							</>
						)}
					</Nav>

					<Form className="d-flex" onSubmit={handleSubmit}>
						<Form.Control
							type="search"
							placeholder="Pesquisar"
							className="me-2"
							aria-label="Search"
							onChange={(e) => setSearch(e.target.value)}
							value={search}
						/>
						<Button variant="outline-light" type="submit">
							<FaMagnifyingGlass />
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
