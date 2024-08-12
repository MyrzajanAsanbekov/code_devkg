import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"

const loginAPI = 'http://3.38.98.134/auth/login';
const singupAPI = 'http://3.38.98.134/auth/signup';

const Auth = () => {
    const [userName, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const [confirmPassword, setConfirmPassword] = React.useState<string>("")
    const [isLoadingTab, setIsLoadingTab] = React.useState<boolean>(true)
    
    const nav = useNavigate()
 
    const handleAuth = (e: React.FocusEvent<HTMLFormElement>) => {
         e.preventDefault()
         if (!userName || !password) {  
            alert("Please fill all the fields")
         }
         if (!isLoadingTab && password !== confirmPassword) {
            alert("Passwords do not match")
         }
         const authURL = isLoadingTab ? loginAPI : singupAPI
         try {
            axios.post(authURL, {
                userName,
                password
            })
            .then(res => {
                const {token , message} = res.data
                if (res.data.success) {
                    console.log("data", res.data);
                    Cookies.set('AuthToken', token)
                    alert(message)
                    nav("/")
                } else {
                    alert(message)
                }
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                
            });

        }
            catch (error) {
                console.log(error);
                
            }
    }
    return (
        <div>
         <div className="container">
          <div className="auth">
            <h1>{isLoadingTab ? "Loging" : "Sing Up"}</h1>
            <form className='login' onSubmit={handleAuth}>
                <input
                value={userName}
                onChange={(e) => setEmail(e.target.value)}
                type="text" placeholder='Email' />

                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password" placeholder='Password...' />

                {!isLoadingTab && (
                    <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password" placeholder='Confirm Password' />
                )}
                <button className='loginBtn' type='submit' >{isLoadingTab ? "login" : "Sing Up"}</button>
             {isLoadingTab ? (
                   <div>
                   <p >Don't have an account?</p>
                   <button className='singup' onClick={(e) => {
                       e.preventDefault()
                       setIsLoadingTab(false)
                   }}>Singup</button>
                   </div>
             ) : (
                <div>
                   <p style={{
                    marginLeft: "50px"
                   }}>Aleardy have an account?</p>

                <button className='singup' style={{
                   marginLeft: "130px"
                }} onClick={(e) => {
                    e.preventDefault()
                    setIsLoadingTab(true)
                }}>Login</button>
                </div>
             )}
            </form>
          </div>
         </div>
        </div>
    );
};

export default Auth;