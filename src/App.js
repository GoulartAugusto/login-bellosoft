import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.css'

import './scss/Login.scss'
import './scss/Social.scss'

import React, { useState } from 'react'

import { makeStyles } from '@fluentui/react-components';
import { ArrowCircleLeftFilled } from '@fluentui/react-icons';
import { MailFilled } from '@fluentui/react-icons';
import { LockClosedFilled } from '@fluentui/react-icons';
import { EyeFilled } from '@fluentui/react-icons';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Layout from './Layout'

const useStyles = makeStyles({
  arrow: { 
    color: '#8B8B8B',
    fontSize: '32px',
   },
   icons: {
    fontSize: '2em',
    marginLeft: '20px',
    color: '#CCCCCC',
    position: 'absolute',
    top: '50%',
    left: '2px',
    transform: 'translateY(-50%)',
   }
});




const SocialAccounts = () => {
  const [google, setGoogle] = useState()
  const [facebook, setFacebook] = useState()
  const [apple, setApple] = useState()
  const [twitter, setTwitter] = useState()

  return (
    <div>
      <div className="social-accounts">
        <p>Or Continue with Social Accounts</p>
        <div className='social-icons'>
          <button className='social-button'><FcGoogle /></button>
          <button className='social-button'><FaFacebook /></button>
          <button className='social-button'><FaApple /></button>
          <button className='social-button'><FaTwitter /></button>
        </div>
        <p>Don't have an account? <a href='#' className='forgot-password'>Create Now</a></p>
      </div>
    </div>
  )
}

const Login = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    if (validateEmail(email) && validatePassword(password)) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password incorrect. The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  return (
    <div className="login-container">
          <div className='bg-image'>
          </div>
      <div className='header' id='header-content'>
        <button className='back-button'><ArrowCircleLeftFilled className={classes.arrow}/></button>
        <h1 className=''>Login</h1>
        <p>Welcome back! <br />Please login to continue</p>
      </div>
      <div className="login-box">
        <div className="input-wrapper">
          <MailFilled className={classes.icons} />
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validateEmail(email)}
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div className="input-wrapper">
        <LockClosedFilled className={classes.icons} />
          <label>Password</label>
          <input
            type={showPassword? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validatePassword(password)}
          />
          <button className="show-password" onClick={toggleShowPassword}>
            <EyeFilled className={classes.icons} />
          </button>
        </div>
        <div>
          {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
          <a href="#" className="forgot-password">Forgot Password?</a>
          <SocialAccounts />
          
      </div>
    </div>
  )
}

const CreateAccount = () => {
  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreate = () => {
    // Adicione aqui a lógica de login
    console.log('Email:', email);
    console.log('Password:', password);
  }
  
  return (
    <div className="login-container">
          <div className='bg-image'>
          </div>
      <div className='header'>
        <button className='back-button'><ArrowCircleLeftFilled className={classes.arrow}/></button>
        <h1 className=''>Login</h1>
        <p>Welcome back! <br />Please login to continue.</p>
      </div>
      <div className="login-box">
        <div className="input-wrapper">
          <MailFilled className={classes.icons} />
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
        <LockClosedFilled className={classes.icons} />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="show-password"><EyeFilled className={classes.icons} /></button>
        </div>
        <button className="login-button" onClick={handleCreate}>Login</button>
          <a href="#" className="forgot-password">Forgot Password?</a>
          <SocialAccounts />
          
      </div>
    </div>
  )
}


function App() {

  return (
    <div className="App">
        <Login />
        {/* <CreateAccount /> */}
        {/* <Layout /> */}
    </div>
  );
}

export default App;

