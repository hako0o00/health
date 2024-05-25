

import React from 'react';
import Nav from '../components/Nav';
import Visit2 from '../components/Visit2';
import PatientList from '../components/PatientsList';
import SpecialityCard from '../components/Speciality';  // Import the Treatments component
import Rectangle2 from '../assets/Rectangle2.png';


const DashD = () => {
  return (
    <div>
      <Nav />
      <div className="w-full h-full flex items-center mx-auto">
        <div className="w-3/5 h-screen">
          <div className="mr-5 ml-20">
            <h1 className="pt-10 pb-2 font-['poppins'] text-5xl font-bold text-[#006060]">RECENT VISITS</h1>
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
          </div>
        </div>

        <div className="w-2/5 h-screen flex">
          <div className="mr-20 ml-5 w-full">
            <h1 className="pt-10 pb-2 font-['poppins'] text-5xl font-bold text-[#006060]">DASHBOARD</h1>
            <div className="mt-7 h-2/6 w-full flex">
              <div className="mr-5 w-2/3 bg-white rounded-3xl flex justify-center p-10">
                <img src={Rectangle2} alt="n1" className="h-full" />
              </div>
              <div className="ml-5 w-1/3 bg-[#008080] rounded-3xl">
                <h1 className="m-auto text-center pt-4 font-['poppins'] text-3xl font-bold text-[#006060]">Rank</h1>
                <h1 className="m-auto text-center pt-3 font-['poppins'] text-6xl font-bold text-[#FFFFFF]">#32</h1>
                <h1 className="m-auto text-center pt-0 font-['poppins'] text-3xl font-bold text-[#FFFFFF]">monthly</h1>
                <h1 className="m-auto text-center pt-4 font-['poppins'] text-3xl font-bold text-[#006060]">Visitors</h1>
                <h1 className="m-auto text-center pt-3 font-['poppins'] text-6xl font-bold text-[#FFFFFF]">115</h1>
                <h1 className="m-auto text-center pt-0 font-['poppins'] text-3xl font-bold text-[#FFFFFF]">Patient</h1>
              </div>
            </div>

            <div className="mt-7 h-1/6 w-full shadow-md bg-white rounded-3xl">
              <SpecialityCard/>{}
            </div>

            <div className="mt-7 bg-white shadow-md w-full rounded-3xl">
              <PatientList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashD;
