import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import '../../auth.css';
import LandingPage from '../screens/LandingPage';
import SignUp from './SignUp';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const logIn = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      
      props.changePage(<LandingPage changePage={(page) => props.changePage(page)}/>);
      props.showing(true);

    } catch (error) {
      let errorMessage = error.message.replace('Firebase: ', '').replace('auth/', '');

      switch (error.code) {
        case 'auth/invalid-email':
          setErrorMessage('Invalid email address. Please enter a valid email.');
          break;
        case 'auth/missing-password':
          setErrorMessage('Password is required. Please enter your password.');
          break;
        case 'auth/invalid-credential':
          setErrorMessage('Invalid credentials. Please check your email and password.');
          break;
        default:
          setErrorMessage(errorMessage);
      }

      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setErrorMessage('');
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(result);
      
      props.changePage(<LandingPage changePage={(page) => props.changePage(page)}/>);
      props.showing(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='back-button'
      style={{
        cursor:'pointer'
      }}
      onClick={() => {
        props.changePage(<LandingPage changePage={(page) => props.changePage(page)}/>);
        props.showing(true);
      }}
      ></div>
      <div className='log-in-page'>
        <div className='log-in-container'>
          <form onSubmit={logIn}>
            <div className='log-in-header'>
              <h1>CHEF'S <br/> RECIPE</h1>
            </div>
            <div className='input-fields'>
              <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className='error-message-container'>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
              <button 
              className='log-in-button' type='submit'>LOG IN</button>
          </form>
            <div className='google-sign-in-button' onClick={signInWithGoogle}>
              <div className='google-icon'></div>
            </div>
          <div 
          style={{
            cursor:'pointer'
          }}
          onClick={() => {
            props.changePage(<SignUp changePage={(page) => props.changePage(page)} showing={(bol)=>props.showing(bol)}/>);
            props.showing(false);
          }}
          className='create-account'><p>Create an account</p></div>
        </div>
      </div>
    </>
  );
};

export default Login;
