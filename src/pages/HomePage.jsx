import React from 'react';
import Card from '../components/Card'; // Make sure the path is correct
import Nav from '../components/Nav'
import Visit from '../components/Visit'
import Im from '../assets/Image.png'

const HomePage = () => {
  return (
    <div class = "h-screen flex-grow">
      <Nav />
       <div class = "w-screen flex items-center m-auto h-full " style={{background: 'linear-gradient(155deg, #61918e 20%, #dbe8e4 80%)' }}>
          <div class = "w-3/6 h-full flex justify-center items-center">
          <div class = "w-5/6 h-full flex justify-center items-center pl-20">
            <div class = "w-full mt-200">
            <h1 class = "text-[#006060] text-9xl block w-full pb-5 font-bold font-['poppins']">dwAI.</h1>
            <h1 class = "text-[#FFFFFF] text-5xl block w-full font-['poppins']">Our innovative Health Care Company</h1>
            <p class = "text-[#FFFFFF] pt-5 text-2xl block w-full font-['poppins']">Make Your life and health easier with ai</p>
            <p class = "text-[#FFFFFF] text-2xl block w-full font-['poppins']">Track your medical records and journals</p>
            <p class = "text-[#FFFFFF] text-2xl block w-full font-['poppins']">and choose the best doctor and the best AI</p>
            <div class="pl-3 mt-10 gap-5 flex">
                <a href = {`/SignUp/Patient`}><button  class = "rounded-full font-['poppins'] bg-[#008080] text-[#FFFFFF] text-xl block w-full mt-3 p-5 center hover:bg-[#006060]">Join now</button></a>
                <a href = {`/SignUp/Doctor`}><button  class = "w-2/5 rounded-full font-['poppins'] bg-white text-[#008080] text-xl block  w-full mt-3 p-5 center hover:bg-[#006060]">I'm a Doctor</button></a>
            </div>
            
            </div>
          </div>
          </div>
          <div class = "w-3/6 h-full flex justify-center items-center">
            <div class = "w-5/6 h-full flex items-center justify-center">
            <img src={Im} alt="Logo" style = {{ width: '400px', height: 'auto'}} />
            </div>
          </div>

        </div>
    </div>
  );
};

export default HomePage;
