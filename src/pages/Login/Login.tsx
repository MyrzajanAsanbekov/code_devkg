import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/Slices/LoginSlices';


const Login = () => {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const nav = useNavigate()
    const dispatch = useDispatch()

    const userLog = () => {

        if (userEmail === "asanbekovmyrzajan1@gmail.com" && userPassword === "12345") {

            let newUser = {
                id: 1,
                email: userEmail,
                Password: userPassword,
             };
             nav("/")
             return dispatch(addUser(newUser))
        }  else {
            alert("Не верный логин или пороль !")
        } 
      setUserEmail("")
      setUserPassword("")
       
    } 
    return (
        <div id='login'>
            <div className="container">
                <div className="login">
                   <a><FaRegUserCircle /></a>
                </div>
                <div className="inputs">
                    <input 
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                    type="text" placeholder='Email'/>
                    <input
                   onChange={(e) => setUserPassword(e.target.value)} 
                   value={userPassword}
                    type="Password" placeholder='Password'/>
                </div>
                <div className="btn">
                    <button
                    onClick={() => userLog()}
                    >Войти</button>
                </div>
            </div>
            
        </div>
    );
};

export default Login;