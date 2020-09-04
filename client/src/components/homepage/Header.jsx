import React from 'react';
import '../../App.css';
import SyringeImage from './SyringeImage';


function Header() {

    return (
        <h1>
            <SyringeImage />
            <a href="/">Needle/Syringe Search Tool</a>
            <img src='https://i.imgur.com/YH5VEIw.png' style={{ height: '60px', width: '150px', transform: 'rotate(180deg)' }} alt='a syringe' />
        </h1>
    );
}
export default Header;