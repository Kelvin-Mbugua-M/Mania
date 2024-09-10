import React from "react";
import { Form, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "./SignIn.css";
import "../StylesAll/SetCursors.css";
import googleIcon from "../../Utilities/Icons/google.png";
import facebookIcon from "../../Utilities/Icons/facebook.png";
import Zeus from "../../Utilities/Images/greek-god-with-lighning.jpg";
const SignIn = () => {
  const [trackEmail, setTrackEmail] = useState('');
  const [trackPassword, setTrackPassword] = useState('');
  const passwordContent = useRef('')
  const emailContent = useRef('')
  let AbortSubmit = new Function();
  useEffect(() => {
    AbortSubmit=(e)=>{
      if( emailContent.current.value == '' ){
        e.preventDefault()
        return null
      }
      if(emailContent.current.value.length <=7 ){
        e.preventDefault()
        return null
      }
    }
  });
  return (
    <div className="sign-in-main-component">
      <div className="sign-in-main-body-component">
        <div className="sign-in-body">
          <article className="sign-in-statement">Welcome Back 😘🥰😍</article>
          <article className="sign-in-information">
            Welcome to MovieStream, your go-to spot for streaming the latest
            blockbusters and timeless classics. Enjoy!
          </article>
          <label htmlFor="email-sign-in">User email</label>
          <input
            type="email"
            name=""
            id="email-sign-in"
            placeholder="@ User email"
            className="sign-in-inputs sign-in-inputs-data"
            ref={emailContent}
            value={trackEmail}
            onChange={(e) => {
              setTrackEmail(e.target.value);
            }}
          />
          <label htmlFor="password-sign-in">User password</label>
          <input
            type="password"
            name=""
            id="password-sign-in"
            placeholder="@ User password"
            className="sign-in-inputs sign-in-inputs-data"
            ref={passwordContent}
            value={trackPassword}
            onChange={(e) => setTrackPassword(e.target.value)}
          />

          <Link to="reset-password">reset password</Link>
          <button type="submit" className="sign-in-inputs sign-in-button" onClick={(e)=>console.log(e)}>
            Sign in
          </button>
          <article className="sign-in-or-statement">or</article>
          <button className="sign-in-inputs sign-in-socials">
            <img src={googleIcon} alt="social log in images" />
            Sign in with google
          </button>
          <button className="sign-in-inputs sign-in-socials">
            <img src={facebookIcon} alt="social log in images" />
            Sign in with facebook
          </button>
          <div className="sign-in-link-to-sign-up">
            <article>Don't have an account ?</article>
            <Link to="/sign-up">Sign up</Link>
          </div>

          <article className="sign-in-copyright">
            2025 All rights reserved
          </article>
        </div>
        <img src={Zeus} alt="" className="sign-in-image" />
      </div>
    </div>
  );
};

export default SignIn;
export {Zeus ,googleIcon ,facebookIcon}