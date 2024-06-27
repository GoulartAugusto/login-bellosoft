import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.css'

import './scss/Login.scss'

import React, { useState } from 'react'

import { makeStyles } from '@fluentui/react-components';
import { ArrowCircleLeftFilled } from '@fluentui/react-icons';
import { MailFilled } from '@fluentui/react-icons';
import { LockClosedFilled } from '@fluentui/react-icons';
import { EyeFilled } from '@fluentui/react-icons';

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

const Login = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Adicione aqui a lógica de login
    console.log('Email:', email);
    console.log('Password:', password);
  }
  return (
    <div className="login-container">
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
      <button className="login-button" onClick={handleLogin}>Login</button>
        <a href="#" className="forgot-password">Forgot Password?</a>
        <div className="social-login">
          <button className="social-button google">G</button>
          <button className="social-button facebook">f</button>
          <button className="social-button apple"></button>
          <button className="social-button twitter">t</button>
        </div>
    </div>
  </div>
  )
}




function App() {

  return (
    <div className="App">
      {/* <div className="App_Layout">
        <div className='Header'>
          <ArrowCircleLeftFilled className={classes.arrow}/>
          <h1 className=''>Login</h1>
          <p>Welcome back! <br />Please login to continue.</p>
        </div>
        <div className='Fields'>
          <div className='Box'>
            <MailFilled className={classes.icons} />
            <div className='Placeholder'>
              <h6>Email Adress</h6>
              <p>Your email address</p>
            </div>
          </div>
          <div className='Box'>
            <LockClosedFilled className={classes.icons} />
            <div className=''>
              <h6>Password</h6>
              <p>Enter your password</p>
            </div >
            <EyeFilled className={classes.icons} />
            <div class="row align-items-center">
            <div class="col-auto">
              <input placeholder='Enter your password' type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
            </div>
          </div>
          </div>
        </div>
      </div> */}

        <Login />
      
    </div>
  );
}

export default App;
