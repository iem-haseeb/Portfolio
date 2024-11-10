import React from 'react';
import Ripple from './component/Ripple';
import HyperTextDemo from './component/HyperText';


const HomePage: React.FC = () => {
  return (
    <>
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
    <HyperTextDemo/>
      <Ripple/>
    </div>
    </>
  );
};

export default HomePage;
