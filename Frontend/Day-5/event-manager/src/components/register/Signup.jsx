import React from 'react';
import './Signup.css';
import { event } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Sig() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate() ;

  const handleSubmit =() => {
    e.preventDefault();
    console.log(name,email,password)  ;
    nav( '/login' ) ;
  }
  return (
    <div className="LoginPageContainer">
      <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
          <img src={event} />
        </div>
        <div className="LoginFormContainer">
          <div className="LoginFormInnerContainer">
            <header className="header">SignUp</header>
            <header className="subHeader">
              Welcome to <b>EventNest!</b> Please Enter your Details
            </header>
            <div className="inputContainer">
            <label className="label" htmlFor="password">
              <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
              <span>Name*</span>
            </label>
            <input
              type="Name"
              className="input"
              id="Name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
            <form>
              <div className="inputContainer">
                <label className="label" htmlFor="emailAddress">
                  <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" alt="LabelIcon" />
                  <span>Email Address*</span>
                </label>
                <input
                  type="email"
                  className="input"
                  id="emailAddress"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="password">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
                  <span>Password*</span>
                </label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="password">
                  <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="LabelIcon" />
                  <span>Password*</span>
                </label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </div>
              <div className="OptionsContainer">
              </div>
              <button type="submit" className="LoginButton" onClick={handleSubmit}>
                Signup
              </button>
              <div className='Login'>
              <p>Already have an account?&nbsp;<Link to={'/login'} style={{color:'#4520ff' , textDecoration:'underline'}}>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sig;