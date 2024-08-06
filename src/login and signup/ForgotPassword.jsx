// ForgotPassword.jsx
import React, { useState } from 'react';

const ForgotPassword = ({ onSendResetCode }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendResetCode(email);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Code</button>
      </form>
    </div>
  );
};

export default ForgotPassword;