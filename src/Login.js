import { Button } from '@material-ui/core'
import React from 'react'
import {auth, provider} from "./firebase"; 
import "./Login.css"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn =() =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error)=> alert(error.message));

    };
    return (
        <div className=
    "login">
        <div className="login__container">
           <img src="data:image/jpeg;base64,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" alt="whatsapp Logo"/>
           <div className="Login__text">
               <h1>Sign in to Chat App</h1>
           </div>
           <Button  onClick={signIn}>
               Sign In with Google
           </Button>

    </div>
            
        </div>
    )
}

export default Login