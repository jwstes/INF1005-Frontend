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

const [iconSize, setIconSize] = useState('3x');

useEffect(() => {
  function handleResize() {
    if (window.innerWidth <= 768) {
      setIconSize('2x');
    } else {
      setIconSize('3x');
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // Call once on component mount

  return () => window.removeEventListener('resize', handleResize);
}, []);


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
              {/* <p>About Us</p> */}
            </div>
            <div className="alignCenter">
              <img
                src="https://cdn.discordapp.com/attachments/1224663916429180928/1224777155028713592/rolex_video.gif?ex=661eb99d&is=660c449d&hm=44a997fa5079c045074f6f062ba7a2765e28f16147e748c2a8f03c985d87d43d&"
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
      src: 'https://cdn.discordapp.com/attachments/1224663916429180928/1224778468643045437/3RwcyKZ.png?ex=661ebad6&is=660c45d6&hm=5bd02e612381e0b497ce15c46296577a1cecdf370ba050f0ae45f46be71fe37d&',
      alt: 'Elegant Rolex Watches',
      caption: 'Elegant Rolex Watches',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1224663916429180928/1224778469188309233/4sFmGFY.png?ex=661ebad6&is=660c45d6&hm=ca8ea7dc3ba982c4992742c93adf7f58fa128326f91617336445dc478db82c79&',
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
    
    <main className="aboutUsPage">
    <header>
      <div id="promotionalBanner" className="promotionalBannerContainer">
        <PromotionalBanner/>
      </div>
    </header>

    <section id="carouselContainer" className={`carouselContainer border ${scrolled ? 'scrolled' : ''}`}>
      <Container fluid>
        <Row>
          <Col>
            <Carousel className='rolexCarousel' interval={1000} controls>
              {renderCarouselItems()}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>

    <section id="historyAndInnovation">
     <HistoryAndInnovation/>
    </section>

        <h1>About Rolex</h1>
        <p>
          Established in 1905, Rolex stands at the pinnacle of watchmaking excellence, embodying luxury, precision, and innovation. Each watch is a testament to our commitment to unmatched quality, merging traditional craftsmanship with avant-garde technology.
        </p>
        <p>
          Discover the world of Rolex, where every timepiece tells a story of relentless pursuit of perfection.
        </p>

    <section id="aboutUsFeatures" className={`aboutUsContent border ${scrolled ? 'scrolled' : ''}`}>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <div className="aboutUsFeature" id="unparalleledPrecision">
            <FontAwesomeIcon icon={faClock} size={iconSize} />
              <h2>Unparalleled Precision</h2>
              <p>
                Renowned for accuracy, Rolex watches are certified chronometers, a testament to our technical prowess.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="aboutUsFeature" id="masterfulCraftsmanship">
              <FontAwesomeIcon icon={faGem} size={iconSize} />
              <h3>Masterful Craftsmanship</h3>
              <p>
                From design to assembly, every Rolex is crafted with meticulous attention to detail, ensuring sublime beauty.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="aboutUsFeature" id="legacyOfExcellence">
              <FontAwesomeIcon icon={faCertificate} size={iconSize} />
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
    </section>

    <footer>
      {/* Scroll to top button */}
      <div className="scrollToTop" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </footer>
  </main>
);
}

export default AboutUs;
