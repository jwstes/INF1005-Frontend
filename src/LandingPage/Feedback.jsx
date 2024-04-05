// Feedback.jsx
import { useState } from 'react';
import './Feedback.css'; 

function Feedback() {
  // Example state and form handler if you need them
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the feedback form submission here
    alert('Your message has been sent. Thank you for providing feedback!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage(''); // Reset form inputs after submission
  };

  return (
    <main id="feedbackMainContent">
      <div className="topSection">
        <div className="rolexImage">
          {/* Image of Rolex goes here */}
          <img src="src\images\HD-wallpaper-rolex-watch.jpg" alt="Rolex" />
        </div>
        <div className="feedbackForm">
          <header>
            <h1>Feedback</h1>
          </header>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name (Optional)</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <label htmlFor="lastName">Last Name (Required)</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
            <label htmlFor="email">Email (Required)</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message here"
              rows="4"
              required
            ></textarea>
            <button type="submit">Send Feedback</button>
          </form>
        </div>
      </div>
      <div className="middleSection">
        <div className="contactInfo">
          <h2>Contact Us</h2>
          <p>For any inquiries, please contact us at:</p>
          <p>Email: example@example.com</p>
          <p>Phone: +65 1234 5678</p>
        </div>
      </div>
      <div className="bottomSection">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.665394053228!2d103.84621207394488!3d1.3774387614886814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da16e96db0a1ab%3A0x3d0be54fbbd6e1cd!2sSingapore%20Institute%20of%20Technology%20(SIT%40NYP)!5e0!3m2!1sen!2ssg!4v1712287155919!5m2!1sen!2ssg"
          width="100%"
          height="450"
          style={{ border: '0' }} 
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}

export default Feedback;
