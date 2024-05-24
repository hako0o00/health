import React from 'react';
import Card from '../components/Card'; // Make sure the path is correct
import Nav from '../components/Nav'
import Visit from '../components/Visit'

const HomePage = () => {
  return (
    <div>
      <Nav />
       <div class = "w-full h-full flex items-center mx-auto">

        <div class ="w-3/5 h-screen">
          <div class ="mr-5 ml-20">
            <h1 class = "pt-10 pb-2 font-['poppins'] text-5xl font-bold text-[#006060]" >RECENT VISITS</h1>
            <Visit class = "mt-10"/>
            <Visit />
            <Visit />
            <Visit />
            <Visit />
            <Visit />
            <Visit />
            <Visit />
          </div>
        </div>
        

        <div class ="w-2/5 h-screen flex">
          <div class ="mr-20 ml-5 w-full">
          <h1 class = "pt-10 pb-2 font-['poppins'] text-5xl font-bold text-[#006060]" >DASHBOARD</h1>
          <div class ="mt-7 h-2/6 w-full flex">
              <div class ="mr-5 w-2/3 bg-white rounded-3xl"></div>
              <div class ="ml-5 w-1/3 bg-[#008080] rounded-3xl">
                <h1 class = "m-auto text-center pt-4 font-['poppins'] text-3xl font-bold text-[#006060]" >Age</h1>
                <h1 class = "m-auto text-center pt-3 font-['poppins'] text-6xl font-bold text-[#FFFFFF]" >69</h1>
                <h1 class = "m-auto text-center pt-0 font-['poppins'] text-3xl font-bold text-[#FFFFFF]" >Years</h1>
                <h1 class = "m-auto text-center pt-4 font-['poppins'] text-3xl font-bold text-[#006060]" >Weight</h1>
                <h1 class = "m-auto text-center pt-3 font-['poppins'] text-6xl font-bold text-[#FFFFFF]" >82</h1>
                <h1 class = "m-auto text-center pt-0 font-['poppins'] text-3xl font-bold text-[#FFFFFF]" >KG</h1>

              </div>
          </div>

          <div class ="mt-7 h-1/6 w-full bg-white rounded-3xl">
              <h1 class = "pt-3 pl-5 font-['poppins'] text-2xl font-bold text-[#006060]" >CHRONIC</h1>
              <h1 class = "pt-3 pl-5 font-['poppins'] text-2xl font-bold text-[#006060]" >ALLERGIES</h1>
          </div>


          <div class ="mt-7 h-2/6 w-full bg-white">
              <h1 class = "pt-3 pl-5 font-['poppins'] text-2xl font-bold text-[#006060]"> Treatments</h1>
          </div>


          </div>
        </div>


      </div>
    </div>
  );
};

export default HomePage;
