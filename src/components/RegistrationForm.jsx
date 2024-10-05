// RegistrationForm

import { useState } from "react";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration requirements
    console.log({
      fullName,
      email,
      password,
      confirmPassword,
      phone,
      dob,
    });
  };

  return (
    <div
      className="form-container"
      style={{
        width: "100%",
        height: "600px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        lineHeight: "20px",
      }}
    >
      <div
        className="content"
        style={{
          width: "80%",
          height: "100%",
          justifyContent: "center",
          lineHeight: '20px',
          marginBottom: '5px',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>New student Registration</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "30%",
            height: "100%",
            borderRadius: "20px",
            justifyContent: "center",
            backgroundColor: "grey",
            display: "flex",
            marginBottom: '5px',
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* The 'htmlFor=fullname' links the label to the input element with the id 'fullname' */}
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone Number (Optional):</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="dob">Date of Birth (Optional):</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          /> <br />

          <button type="submit" style={
            {
                backgroundColor: 'lightblue',
                borderRadius: '20px',
                width: '60px',
                height: '30px',
            }
          }>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
