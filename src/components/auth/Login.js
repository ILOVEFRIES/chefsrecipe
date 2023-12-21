import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../../auth.css'; 

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const logIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
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
      });
  };

  return (
    <>
    <div className='back-button'></div>
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
                <button className='log-in-button' type='submit'>LOG IN</button>
                <div className='create-account'><p>Create an account</p></div>
            </form>
        </div>
    </div>
    </>
  );
};

export default Login;
