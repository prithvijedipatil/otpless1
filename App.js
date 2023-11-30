import React, { useEffect, useState } from "react";
import "./LoginPage.css"; // Import the CSS file

const App = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("inside use effect");
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    // Basic form validation
    if (!mobileNumber || !name || !email) {
      setError("Please fill in all fields.");
      return;
    }

    // Perform login logic (you can add your own authentication here)

    // Reset form fields
    setMobileNumber("");
    setName("");
    setEmail("");
    setError("");

    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
    };
  };

  return (
    <>
      {/* <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Mobile Number:
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>} */}
    </>
  );
};

export default App;
