import React from 'react'
import Navbar from '../navbar';
import Wallpaper from '../wallpaper';
import Shop from '../shop';
import Futer from '../futer';

const MotorComponents = () => {
  return (
    <div style={{backgroundColor: "#FFF", }}>
        <Navbar/>
        <Wallpaper/>
        <Shop/>
        <Futer/>
    </div>
  );
};

export default MotorComponents;

