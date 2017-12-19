import React, { Component } from 'react';
import Nav from '../components/Nav';
import Search from '../components/Search';
import './header.less'
import Animation from '../components/Animation'

export default class Header extends Component {
    render() {

        return (
            <header className="header">
                <div className="header__logo" />
                <a className="header__office" href="#login">Войти</a>
                <Nav />
                <Animation />
                <Search />
            </header>
        );
    }
}
