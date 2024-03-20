// AboutUs.js
import { useState } from 'react';
import { Badge, Carousel, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGem, faCertificate, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './AboutUs.css';

function AboutUs() {
  const PromotionalBanner = () => (
    <Container fluid className="promotionBanner">
      <Row>
        <Col className="promotionalItem">
          <div className="textBlock">
            <h3>ABOUT US</h3>
            <p>About Us</p>
          </div>
          <div className="alignCenter">
            <video autoPlay loop muted className="videoBanner">
              <source src="/src/video/rolex_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>
    </Container>
  );

  const HistoryAndInnovation = () => (
    <Row>
      <Col>
        <div className="historyInnovation">
          <h2>Innovation & Heritage</h2>
          <p>
            The Rolex Oyster case, a pioneering technology in the watch industry, was introduced in 1926, offering the first waterproof wristwatch case. The perpetual rotor, invented in 1931, allowed the watch to be wound with the wearer&apos;s wrist motion, laying the groundwork for modern automatic watches.
          </p>
          <p>
            Rolex&apos;s dedication to excellence is seen in their timeless designs, such as the Submariner and Day-Date, which continue to define standards of style and performance.
          </p>
          <Badge bg="secondary">Innovation</Badge>
          <Badge bg="secondary">Heritage</Badge>
        </div>
      </Col>
    </Row>
  );

  const handleCarouselSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
  };

  const carouselItems = [
    {
      src: '/src/images/slide1.webp',
      alt: 'Elegant Rolex Watches',
      caption: 'Elegant Rolex Watches',
    },
    {
      src: '/src/images/slide3.webp',
      alt: 'Modern Rolex Timepieces',
      caption: 'Modern Rolex Timepieces',
    },
  ];

  const renderCarouselItems = () => {
    return carouselItems.map((item, index) => (
      <Carousel.Item key={index}>
        <img className="d-block w-100" src={item.src} alt={item.alt} />
        <Carousel.Caption>
          <h3>{item.caption}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };

  return (
    <div className="aboutUsPage">
      <PromotionalBanner />
      <Container fluid className="carouselContainer border">
        <Row>
          <Col>
            <Carousel className='rolexCarousel' interval={1000} controls>
              {renderCarouselItems()}
            </Carousel>
          </Col>
        </Row>
      </Container>

      <HistoryAndInnovation />

      <Container fluid className="aboutUsContent border">
        <h1>About Rolex</h1>
        <p>
          Established in 1905, Rolex stands at the pinnacle of watchmaking excellence, embodying luxury, precision, and innovation. Each watch is a testament to our commitment to unmatched quality, merging traditional craftsmanship with avant-garde technology.
        </p>
        <p>
          Discover the world of Rolex, where every timepiece tells a story of relentless pursuit of perfection.
        </p>
      </Container>

      <Container fluid className="aboutUsFeatureContainer border">
        <Row>
          <Col sm={4}>
            <div className="aboutUsFeature" id="unparalleledPrecision">
              <FontAwesomeIcon icon={faClock} size="3x" />
              <h3>Unparalleled Precision</h3>
              <p>
                Renowned for accuracy, Rolex watches are certified chronometers, a testament to our technical prowess.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="aboutUsFeature" id="masterfulCraftsmanship">
              <FontAwesomeIcon icon={faGem} size="3x" />
              <h3>Masterful Craftsmanship</h3>
              <p>
                From design to assembly, every Rolex is crafted with meticulous attention to detail, ensuring sublime beauty.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="aboutUsFeature" id="legacyOfExcellence">
              <FontAwesomeIcon icon={faCertificate} size="3x" />
              <h3>Legacy of Excellence</h3>
              <p>
                A symbol of excellence since 1905, Rolex watches are an enduring legacy of luxury and performance.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <div className="aboutUsFeature" id="globalPresence">
              <FontAwesomeIcon icon={faUsers} size="3x" />
              <h3>Global Presence</h3>
              <p>
                With a presence in over 100 countries, Rolex serves as a global ambassador of luxury and sophistication.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="aboutUsFeature" id="environmentalCommitment">
              <FontAwesomeIcon icon={faGlobe} size="3x" />
              <h3>Environmental Commitment</h3>
              <p>
                Committed to sustainability, Rolex actively supports environmental initiatives to preserve our planet for future generations.
              </p>
            </div>
          </Col>
          {/* Placeholder for future content */}
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
