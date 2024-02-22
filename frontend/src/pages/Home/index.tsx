import Carrossel from "../../components/Carrossel";
import CardStreaming from "../../components/CardStreaming";
import ImagePromotion from "../../components/ImagePromotion";

function Home() {
	return (
		<>
			<Carrossel />
			<ImagePromotion />
			<CardStreaming id={""} title={""} description={""} value={0} photo={""} />
		</>
	);
}

export default Home;
