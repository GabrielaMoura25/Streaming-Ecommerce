import CardGeneric from "../Card";

export default function AllCards() {
	return (
		<>
			<div style={{ textAlign: "center", marginTop: "40px" }}>
				<h2>Seleção de produtos para você</h2>
			</div>
			<div
				style={{
					marginTop: "40px",
					display: "flex",
					gap: "20px",
					justifyContent: "center",
				}}
			>
				<CardGeneric
					imageUrl={
						"https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
					}
					title="Netflix"
					text="Texto do Card"
					buttonText="Adicionar ao carrinho"
				/>
				<CardGeneric
					imageUrl={
						"https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
					}
					title="Prime Video"
					text="Texto do Card"
					buttonText="Adicionar ao carrinho"
				/>
				<CardGeneric
					imageUrl={
						"https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
					}
					title="Apple TV"
					text="Texto do Card"
					buttonText="Adicionar ao carrinho"
				/>
				<CardGeneric
					imageUrl={
						"https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
					}
					title="Amazon Video"
					text="Texto do Card"
					buttonText="Adicionar ao carrinho"
				/>
			</div>
		</>
	);
}
