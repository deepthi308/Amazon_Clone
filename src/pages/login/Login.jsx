import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="login">
      <Link to={"/"}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          className="login-logo"
          alt="Login Logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button type="submit" className="login-signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Internet-Based Ads
          Notice.
        </p>
        <button className="login-registerButton">
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}
