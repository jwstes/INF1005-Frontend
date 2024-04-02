// Feedback.jsx
import { useState } from 'react';
import './Feedback.css'; // Make sure to create and reference the CSS file correctly

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

  return(
    <main id="feedbackMainContent">
      <header>
        <h1>Feedback</h1>
      </header>
      <div className="feedbackContainer"> {/* Changed from "contactUsContainer" to "feedbackContainer" */}
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
          <label htmlFor="message">Your message here (Minimum 20 characters)</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message here"
            rows="4"
            minLength="20"
            required
          ></textarea>
          <button type="submit">Send Feedback</button>
        </form>
      </div>
    </main>
  );
}

export default Feedback;
