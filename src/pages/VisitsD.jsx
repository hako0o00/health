

import React from 'react';
import Nav from '../components/Nav';
import Visit2 from '../components/Visit2';
import PatientList from '../components/PatientsList';
import SpecialityCard from '../components/Speciality';  // Import the Treatments component
import Rectangle2 from '../assets/Rectangle2.png';


const VisitsD = () => {
  return (
    <div>
      <Nav />
      <div className="w-full h-full flex items-center mx-auto">
        <div className="w-screen h-screen">
          <div className="mr-20 ml-20">
            <h1 className="pt-10 pb-2 font-['poppins'] text-5xl font-bold text-[#006060]">MY VISITS</h1>
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
            <Visit2 className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitsD;
