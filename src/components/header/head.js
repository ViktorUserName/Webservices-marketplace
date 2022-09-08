import React from 'react';
import ReactDOM from 'react-dom';
import './head.css';
import {HeaderMenu} from "./headerMenu.js";

const Head = () => {
    return (
        <div className='head-content'>
         
            <HeaderMenu />;
            <div className="head-line"></div>
            <div className='head_start'>контент</div>
            
        </div>
    )
};

export default Head;