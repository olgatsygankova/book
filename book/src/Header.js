import React, { Component } from 'react';
import Nav from './Nav';
import Animation from './Animation';
import Search from './Search';
import './header.less'


class Header extends Component {
    render() {
        return (
            <header className="header">
                    <div className="header__logo"></div>
                    <a className="header__office" href="#login">Войти</a>
                    <Nav />
                    <Animation />
                    <Search />
            </header>
        );
    }
}

export default Header;