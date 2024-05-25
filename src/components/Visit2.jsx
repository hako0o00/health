import React from 'react';
import Vector1 from '../assets/Vector1.png'
import Vector from '../assets/Vector.png'
const Visit2 = () => {
  return (
    <div class =" mt-5  w-full bg-white rounded-3xl flex items-center justify-between gap-8">
            <div class="ml-6 p-2  flex items-center	">
            <img src={Vector1} alt="n1" style = {{ width: '60px', height: 'auto'}} class = " ml-8 " />
            </div>
            <div class="w-1/2 py-4 flex flex-col gap-[2px] justify-center ">
              <h1 class=' font-bold	text-lg font-sans text-gray-700leading-relaxed tracking-normal'>Visit N°: #32</h1>
              <p class='text-base font-sans text-gray-700  leading-relaxed tracking-normal'>Doctor : Ait Amrane Rachid </p>
              <p class='text-base font-sans text-gray-700  leading-relaxed tracking-normal'>Date : 15/06/2023 </p>
              <p class='text-base font-sans text-gray-700  leading-relaxed tracking-normal'>Diagnosis : Allergy</p>
              <p class='text-base font-sans text-gray-700  leading-relaxed tracking-normal'>Treatment : None</p>
            </div>
            <div class='w-1/4 p-4'>
            <img src={Vector} alt="Vector" style = {{ width: '40px', height: '40px'}} class = "ml-28  " />
            </div>
    </div>
  );
};

export default Visit2;