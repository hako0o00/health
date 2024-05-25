


import React from 'react';
import Nav from '../components/Nav';
import Visit from '../components/Visit';
import Treatments from '../components/Treatment';
import HealthConditions from '../components/CHRONIC';  // Import the Treatments component
import Graphh from '../assets/graphh.png';

const DashP = () => {
  return (
    <div>
      <Nav />
      <div className="w-full h-full flex items-center mx-auto">
        <div className="w-3/5 h-screen">
          <div className="mr-5 ml-20">
            <h1 className="pt-10 pb-2 font-['poppins'] text-5xl font-bold text-[#006060]">RECENT VISITS</h1>
            <Visit className="mt-10" />
            <Visit className="mt-10" />
            <Visit className="mt-10" />
            <Visit className="mt-10" />
            <Visit className="mt-10" />
          </div>
        </div>

        <div className="w-2/5 h-screen flex">
          <div className="mr-20 ml-5 w-full">
            <h1 className="pt-10 pb-2 font-['poppins'] text-5xl font-bold text-[#006060]">DASHBOARD</h1>
            <div className="mt-7 h-2/6 w-full flex">
              <div className="mr-5 w-2/3 bg-white rounded-3xl flex justify-center p-10">
                <img src={Graphh} alt="n1" className="h-full" />
              </div>
              <div className="h-full m-auto w-1/3 bg-[#008080] rounded-3xl justify-center items-center ">
                <h1 className="m-auto text-center pt-4 font-['poppins'] text-2xl font-bold text-[#006060]">Age</h1>
                <h1 className="m-auto text-center pt-3 font-['poppins'] text-5xl font-bold text-[#FFFFFF]">69</h1>
                <h1 className="m-auto text-center pt-0 font-['poppins'] text-2xl font-bold text-[#FFFFFF]">Years</h1>
                <h1 className="m-auto text-center pt-4 font-['poppins'] text-2xl font-bold text-[#006060]">Weight</h1>
                <h1 className="m-auto text-center pt-3 font-['poppins'] text-5xl font-bold text-[#FFFFFF]">82</h1>
                <h1 className="m-auto text-center pt-0 font-['poppins'] text-2xl font-bold text-[#FFFFFF]">KG</h1>
              </div>
            </div>

            <div className="mt-7 h-1/6 w-full bg-white rounded-3xl">
              <HealthConditions/>{}
            </div>

            <div className="mt-7 w-full">
              <Treatments /> {/* Add the Treatments component */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashP;
