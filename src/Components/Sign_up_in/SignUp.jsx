import React from "react";
import { Link } from "react-router-dom";
import { facebookIcon, googleIcon, Zeus } from "./SignIn";
import "../StylesAll/SetCursors.css";
import './SignIn.css'
import './SignUp.css'
const SignUp = () => {
  return (
    <div className="sign-up-main-body-component">
      <div className="sign-up-body-content">
        <img src={Zeus} alt="" className="main-body-img-sign-up" />
        <div className="body-content-sign-up">
          <article className="sign-up-statement">
            Welcome 😘😎🤗
          </article>
          <article className="sign-up-information">
          Welcome to MovieStream, your go-to spot for streaming the latest
          blockbusters and timeless classics. Enjoy!
          </article>
          <input
            className="sign-up-input sign-up-input-data"
            placeholder="@ User name"
            type="email"
            name=""
            id=""
          />
          <input
            className="sign-up-input sign-up-input-data"
            placeholder="@ User Password"
            type="password"
            name=""
            id=""
          />
          <input
            className="sign-up-input sign-up-input-data"
            placeholder="@ Confirm User Password"
            type="password"
            name=""
            id=""
          />
          <div className="sign-up-terms-folder">
            <input type="checkbox" name="" id="" />
            <article className="sign-up-terms-text">I agree to all</article>
            <Link className="links-sign-up" to="terms">Terms and Conditions</Link>
          </div>
          <button className="buttons-submit-sign-up">Create account</button>
          <article className="sign-up-or-statement">or</article>
          <button className="buttons-submit-sign-up">
            <img src={googleIcon} alt="this are socials buttons" />
            sign up with google
          </button>
          <button className="buttons-submit-sign-up">
            <img src={facebookIcon} alt="this are socials buttons" />
            sign up with facebook
          </button>
          <div className="sign-up-redirect-section">
            <article className="sign-up-redirect-info">
              already have an account
            </article>
            <Link className="links-sign-up link-to" to="/sign-in">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
