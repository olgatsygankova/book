import React, { Component } from 'react';
import Naw from './Header__nav';
import Animation from './Animation';
import Search from './Search';


class Header extends Component {
    render() {
        return (
            <header className="header">
                    <div className="header__logo"></div>
                    <a className="header__office" href="#login">Войти</a>
                    <Naw />
                    <Animation />
                    <Search />
            </header>
        );
    }
}

export default Header;