import { useState, useEffect } from 'react';
// import { animateScroll as scroll } from 'react-scroll';
import { Badge, Carousel, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGem, faCertificate, faUsers, faGlobe, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './AboutUs.css'; // Import CSS file for styling

function AboutUs() {
  const [scrolled, setScrolled] = useState(false);

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const aboutUsFeatures = document.querySelectorAll('.aboutUsFeature');
  
  aboutUsFeatures.forEach(feature => {
    if (isInViewport(feature)) {
      feature.classList.add('scrolled');
    } else {
      feature.classList.remove('scrolled');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', function() {
  handleScroll();
});


  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position of the promotional banner or other elements
      const promotionalBanner = document.getElementById('promotionalBanner');
      if (promotionalBanner) {
        const { top } = promotionalBanner.getBoundingClientRect();
        if (top <= 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);

  // Clean up by removing event listener when component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  // PromotionalBanner component
  const PromotionalBanner = () => (
    <div className={`overlayContainer ${scrolled ? 'scrolled' : ''}`}>
      <Container fluid className="promotionBanner">
        <Row>
          <Col className="promotionalItem">
            <div className="VideoTextBlock">
              <h3>ABOUT US</h3>
              <p>About Us</p>
            </div>
            <div className="alignCenter">
              <img
                src="/src/video/rolex_video.gif"
                alt="Promotional GIF"
                className="gifBanner"
                style={{ width: '100%' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  // HistoryAndInnovation component
  const HistoryAndInnovation = () => (
    <Row>
      <Col>
        <div className={`historyInnovation ${scrolled ? 'scrolled' : ''}`}>
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

 // Function to scroll to top when clicked
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Add smooth behavior for a more pleasant scroll animation
  });
};

  // Array of carousel items
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
        <Carousel.Caption className="carouselCaption">
          <h3>{item.caption}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };

  return (
    <div className="aboutUsPage">
      <div id="promotionalBanner" className="promotionalBannerContainer">
        <PromotionalBanner />
      </div>
      <Container id="carouselContainer" fluid className={`carouselContainer border ${scrolled ? 'scrolled' : ''}`}>
        <Row>
          <Col>
            <Carousel className='rolexCarousel' interval={1000} controls>
              {renderCarouselItems()}
            </Carousel>
          </Col>
        </Row>
      </Container>

      <HistoryAndInnovation />

      <Container fluid className={`aboutUsContent border ${scrolled ? 'scrolled' : ''}`}>
        <h1>About Rolex</h1>
        <p>
          Established in 1905, Rolex stands at the pinnacle of watchmaking excellence, embodying luxury, precision, and innovation. Each watch is a testament to our commitment to unmatched quality, merging traditional craftsmanship with avant-garde technology.
        </p>
        <p>
          Discover the world of Rolex, where every timepiece tells a story of relentless pursuit of perfection.
        </p>
      </Container>

      <Container id="aboutUsContent" fluid className={`aboutUsContent border ${scrolled ? 'scrolled' : ''}`}>
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
          <Col sm={4}></Col>
        </Row>
      </Container>

      {/* Scroll to top button */}
      <div className="scrollToTop" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
}

export default AboutUs;
