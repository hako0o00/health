import React from 'react';
import DoctorImage from '../assets/DoctorImage.png';

const Doctor_Image = () => {
  return (
    <div className="h-full flex items-center justify-center " style={{width:'800px' ,height:'auto'}}>
      <img src={DoctorImage} alt="Doctors" className="rounded-lg shadow-lg w-full h-full object-cover" />
    </div>
  );
};

export default Doctor_Image;
