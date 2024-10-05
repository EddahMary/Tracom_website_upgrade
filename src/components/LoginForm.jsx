// LoginForm.jsx
// import userIcon from "../assets/user.png"
// import emailIcon from "../assets.email.png"
// import passwordIcon from "../assets.password.png"

import { useState } from "react";

// Implementing usestate 
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handling the log in concept 
        console.log({ email, password });
    };

    return (
        <div className="form-container"
        style={{
          width: "100%",
          height: "600px",
          justifyContent: 'center',
          alignItems: 'center',
          display: "flex",
          lineHeight: "20px",
        }}
      > 
        <div
          className="content"
          style={{
              width: '80%',
              height: '100%',
              justifyContent: 'center',
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
            }}
            >
            {/* <img src={userIcon} alt="user" /> */}
            <h2>Student Login</h2>
            <form onSubmit={handleSubmit}
             style={{
                width: "30%",
                height: "100%",
                borderRadius: "20px",
                justifyContent: "center",
                backgroundColor: "grey",
                marginBottom: '5px',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                <div>
                    {/* <img src={emailIcon} alt="email" /> */}
                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    </div>

                    <div>
                        {/* <img src={passwordIcon} alt="password" /> */}
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    </div><br />

                <button type="submit" style={
            {
                backgroundColor: 'lightblue',
                borderRadius: '20px',
                width: '60px',
                height: '30px',
            }
          }>Login</button>
                {/* <p><a href="#">Forgot Password?</a></p> */}
            </form>
        </div>
                    </div>
    );
};

export default LoginForm;
