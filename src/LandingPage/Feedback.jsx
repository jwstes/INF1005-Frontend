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

  return (
    <div className="feedbackContainer"> {/* Changed from "contactUsContainer" to "feedbackContainer" */}
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name (Optional)"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name (Mandatory)"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (Mandatory)"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message here (Minimum 20 characters)"
          rows="4"
          minLength="20"
          required
        ></textarea>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
