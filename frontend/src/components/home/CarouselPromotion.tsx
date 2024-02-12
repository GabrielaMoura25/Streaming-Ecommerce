import { Carousel } from 'react-bootstrap';
import firstImage from './images/image_first.jpg';
import secondImage from './images/image_second.jpg';
import thirdImage from './images/image_third.jpg'

function CarouselPromotion() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '40px' }}>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 "
          src={firstImage}
          style={{ maxHeight: '300px', objectFit: 'cover' }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={secondImage}
          style={{ maxHeight: '300px', objectFit: 'cover' }}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thirdImage}
          style={{ maxHeight: '300px', objectFit: 'cover' }}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselPromotion;