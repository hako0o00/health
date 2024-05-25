import React from 'react';

const Treatments = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">
      <h1 className="text-[#006060] font-bold text-2xl mb-4">Treatments</h1>
      <ul>
        <li className="flex justify-between mb-2">
          <span>Vitamin C</span>
          <span>200 mg/day</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>Magnesium</span>
          <span>150 mg/day</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>Vitamin D</span>
          <span>20 mg/day</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>XYDOL 400</span>
          <span>30 mg/day</span>
        </li>
        <li className="flex justify-between">
          <span>Vitamin A+</span>
          <span>15 mg/day</span>
        </li>
      </ul>
    </div>
  );
};

export default Treatments;
