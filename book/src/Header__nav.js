import React, { Component } from 'react';
import logo from './logo.svg';
/*import './App.css';*/
import './header.less';
import './styles.less';
import './header__nav.less';

class Header__nav extends Component {
    render() {
        return (
            <div className="header__nav">
                <input id="toggle" type="checkbox" />
                    <label className="toggle-container" for="toggle">
                        <span className="button button-toggle"></span>
                    </label>
                    <nav className="header__menu">
                        <a className="header__menu-item header__menu-item--home--active header__menu-item--home" href="">Главная</a>
                        <a className="header__menu-item header__menu-item--my-books" href="">Мои книги</a>
                        <a className="header__menu-item header__menu-item--download-book" href="">Загрузить книгу</a>
                    </nav>
            </div>
        );
    }
}

export default Header__nav;