import { Carousel } from "react-bootstrap";
import firstImage from "../../assets/images/imagem1.png";
import secondImage from "../../assets/images/imagem2.png";
import thirdImage from "../../assets/images/imagem3.png";

export default function Carrossel() {
	return (
		<div style={{ maxWidth: "100vw", margin: "auto", marginTop: "40px" }}>
			<Carousel>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100 "
						src={firstImage}
						style={{ maxHeight: "300px", objectFit: "cover" }}
						alt="First slide"
					/>
					{/* <Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100"
						src={secondImage}
						style={{ maxHeight: "300px", objectFit: "cover" }}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100"
						src={thirdImage}
						style={{ maxHeight: "300px", objectFit: "cover" }}
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
