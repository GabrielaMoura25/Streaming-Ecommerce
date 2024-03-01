import Image from "react-bootstrap/Image";

import promotion from "../../assets/images/promotion.png";

export default function ImagePromotion() {
	return <Image style={{ marginTop: "2rem", width: '100%' }} src={promotion} fluid />;
}
