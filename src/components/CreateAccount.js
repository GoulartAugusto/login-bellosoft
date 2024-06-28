import '../scss/App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/Login.scss';
import '../scss/Social.scss';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@fluentui/react-components';
import { ArrowCircleLeftFilled } from '@fluentui/react-icons';
import { MailFilled } from '@fluentui/react-icons';
import { LockClosedFilled } from '@fluentui/react-icons';
import { EyeFilled } from '@fluentui/react-icons';
import { PhoneFilled } from '@fluentui/react-icons';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
    return (
        <div>
            <div className="social-accounts">
                <p>Or Register with Social Accounts</p>
                <div className='social-icons'>
                    <button className='social-button'><FcGoogle /></button>
                    <button className='social-button'><FaFacebook /></button>
                    <button className='social-button'><FaApple /></button>
                    <button className='social-button'><FaTwitter /></button>
                </div>
                <p>Already have an account? <Link to='/' className='forgot-password'>Login Now</Link></p>
            </div>
        </div>
    )
}

const CreateAccount = () => {
    const classes = useStyles()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleCreate = () => {
        if (validateEmail(email) && validatePassword(password)) {
            // Adicione aqui a lógica de login
            console.log('Email:', email);
            console.log('Password:', password);
        }
    }
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
            setPasswordError('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character');
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
            <div className='header'>
                <Link to='/' className='back-button'>
                    <ArrowCircleLeftFilled className={classes.arrow} />
                </Link>
                <h1 className=''>Create Account</h1>
                <p>Enter your information below or continue <br />with social media account</p>
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
                    <PhoneFilled className={classes.icons} />
                    <label>Mobile Number</label>
                    <input
                        type="email"
                        placeholder="Your mobile number"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <LockClosedFilled className={classes.icons} />
                    <label>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create password"
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
                <Link to='/' className="login-button">
                    <button className="login-button" onClick={handleCreate}>Create Account</button>
                </Link>
                <SocialAccounts />

            </div>
        </div>
    )
}

export default CreateAccount