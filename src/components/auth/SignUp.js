import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { initialHistory } from '../../utilities/initialHistory';
import LandingPage from '../screens/LandingPage';
import Login from './Login';


export const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const signUp = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                console.log(userCredential);
                await initialHistory(userCredential.user.uid);
                
                props.changePage(<LandingPage changePage={(page) => props.changePage(page)}/>);
                props.showing(true);

            })
            .catch((error) => {
                let errorMessage = error.message.replace('Firebase: ', '').replace('auth/', '');
                errorMessage = errorMessage.replace('(weak-password)', '');
            
                switch (error.code) {
                    case 'auth/invalid-email':
                        setErrorMessage('Invalid email address. Please enter a valid email.');
                        break;
                    case 'auth/missing-password':
                        setErrorMessage('Password is required. Please enter your password.');
                        break;
                    case 'auth/email-already-in-use':
                        setErrorMessage('This email is already in use. Please use a different email address.');
                        break;
                    default:
                        setErrorMessage(errorMessage);
                }
            
                console.error(error);
            });

        
            
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
      }}></div>
        <div className='sign-up-page'>
            <div className='sign-up-container'>
            <form onSubmit={signUp}>
                <div className='sign-up-header'>
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
                <button className='sign-up-button' type='submit'>SIGN UP</button>
                <div 
                style={{
                    cursor:'pointer'
                  }}
                onClick={() => {
                    props.changePage(<Login changePage={(page) => props.changePage(page)} showing={(bol)=>props.showing(bol)}/>);
                    props.showing(false);
                  }}
                className='have-account'><p>Already have an account?</p></div>
            </form>
        </div>
        </div>
        </>
    );
};

export default SignUp;
