import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function NavScrollExample() {
	return (
		<Navbar expand="lg" bg="primary" variant="dark">
			<Container fluid>
				<Navbar.Brand href="/">Ecommerce Streaming</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="/user/register">Cadastra-se</Nav.Link>
					</Nav>

					<Form className="d-flex">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link href="/login">Login</Nav.Link>
						</Nav>
						<Form.Control
							type="search"
							placeholder="Pesquisar"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-light">
							<FaMagnifyingGlass />
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
