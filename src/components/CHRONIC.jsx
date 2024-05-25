import React from 'react';

const HealthConditions = () => {
  return (
    <div className="flex items-center justify-center h-full rounded-3xl shadow-md max-w-3xl mx-auto">
      <div className="flex flex-col items-center w-1/2">
        <h2 className="text-lg font-semibold mb-2">Chronic</h2>
        <ul className="list-none text-center">
          <li>diabetese</li>
          <li>Heart disease</li>
        </ul>
      </div>
      <div className="h-24 w-px bg-black mx-4"></div>
      <div className="flex flex-col items-center w-1/2">
        <h2 className="text-lg font-semibold mb-2">Allergies</h2>
        <ul className="list-none text-center">
          <li>peanuts</li>
          <li>Honey</li>
        </ul>
      </div>
    </div>
  );
};

export default HealthConditions;
