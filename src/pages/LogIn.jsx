import React, { useState } from 'react';
import Axios from 'axios';
import Logo from '../assets/logo.png';
import {redirect} from "react-router-dom"
const LogIn = () => {
    // // State hooks for inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // // Handle login functionality
    // const handleLogin = async (event) => {
    //     event.preventDefault(); // Prevent the default form submission
    //     try {
    //         const response = await Axios.post('http://127.0.0.1:5000/patient/login', {
    //             doctor_id: username,
    //             password: password
    //         });
    //         console.log('Login successful:', response.data);
    //         // Redirect or handle response here
    //         redirect("/DashP")
    //     } catch (error) {
    //         console.error('Login failed:', error);
    //     }
    // };

    return (
        <div className="flex w-full h-screen" style={{background: 'linear-gradient(155deg, #61918e 20%, #dbe8e4 80%)'}}>
            <div className="w-2/6 m-auto">
                <div className="flex w-full h-full items-center justify-center">
                    <img src={Logo} style={{ width: '150px', height: 'auto' }} alt="Logo" />
                </div>

                <form>
                    <input type="text" className="rounded-2xl bg-[#FFFFFF] focus:text-[#000000] text-[#A7A3FF] text-xl block w-full p-5"
                           id="username" placeholder="Username" required
                           value={username} onChange={e => setUsername(e.target.value)} />

                    <input type="password" className="rounded-2xl bg-[#FFFFFF] focus:text-[#000000] text-[#A7A3FF] text-xl block w-full p-5 mt-6 mb-3"
                           id="password" placeholder="Password" required
                           value={password} onChange={e => setPassword(e.target.value)} />

                    <a className="pt-10 pb-10 textsm text-[#008080] w-full" href='#'>Forgot Password?</a>
                    <a href= {'/DashP'}><button type="button" className="rounded-full bg-[#008080] text-[#FFFFFF] text-xl block w-full mt-3 p-5 hover:bg-[#006060]">Log in</button></a>
                </form>

                <p className="textsm mt-6 w-full text-center">Don't have an account yet ? <a href="/SignUp/" className="text-x text-[#008080] text-sm font-bold">Register Here!</a></p>
            </div>
        </div>
    );
};

export default LogIn;
