import React, { Component } from 'react';
import './nav.less';

class Nav extends Component {
    render() {
        return (
            <div className="header__nav nav">
                <input id="toggle" type="checkbox" />
                    <label className="toggle-container" htmlFor="toggle">
                        <span className="button button-toggle"></span>
                    </label>
                    <nav className="nav__menu">
                        <a className="nav__menu-item nav__menu-item--home--active nav__menu-item--home" href="">Главная</a>
                        <a className="nav__menu-item nav__menu-item--my-books" href="">Мои книги</a>
                        <a className="nav__menu-item nav__menu-item--download-book" href="">Загрузить книгу</a>
                    </nav>
            </div>
        );
    };
}

export default Nav;