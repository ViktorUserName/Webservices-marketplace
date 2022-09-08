import React from 'react';
import ReactDOM from 'react-dom';

const HeaderMenu = () => {
    return (
        <div className='head_menu'>
            <ul className='head_menu-ul'>
                <li><a href='#' className='head_menu-li'>Главная</a></li>
                <li><a href='#' className='head_menu-li'>Наши проекты</a></li>
                <li><a href='#' className='head_menu-li'>Услуги</a></li>
                <li><a href='#' className='head_menu-li'>Новости</a></li>
                <li><a href='#' className='head_menu-li'>Контакты</a></li>
            </ul>
        </div>
    )
}

export { HeaderMenu };