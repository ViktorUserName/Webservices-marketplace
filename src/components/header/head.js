import React from 'react';
import ReactDOM from 'react-dom';
import './head.css';
import {HeaderMenu} from "./headerMenu.js";

const Head = () => {
    return (
        <div className='head'>

        <div className='wrapper'>
            <div className='head-content'>
                <HeaderMenu />
                <div className="head-line"></div>

                <div className='head-startInfo'>
                    <div className='head_text-1'>Передовая IT студия</div>
                    <div className='head_text-2'>Мы создаем легкие решения<br/> 
                    сложных задач и проблем</div>
                    <div><button className='head_button'>Наши проекты</button></div>
                </div>
                </div>      
        </div>

        </div>
    )
};

export default Head;