import React from 'react';
import Nav from '../components/Nav';
import Visit from '../components/Visit';
import Treatments from '../components/Treatment';
import HealthConditions from '../components/CHRONIC';  // Import the Treatments component
import Graphh from '../assets/graphh.png';

const VisitsP = () => {
  return (
    <div>
      <Nav />
      <div className="w-full h-full flex items-center mx-auto">
        <div className="w-screen h-screen">
          <div className="mr-20 ml-20">
            <h1 className="pt-10 pb-2 font-['poppins'] text-5xl font-bold text-[#006060]">RECENT VISITS</h1>
            <Visit className="mt-10" />
            <Visit className="mt-10" />
            <Visit className="mt-10" />
            <Visit className="mt-10" />
            <Visit className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitsP;