import React, { Component } from 'react';
import logo from './logo.svg';
/*import './App.css';*/
import './header.less';
import './styles.less';
import Naw from './Header__nav';
import './header__nav.less';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <header className="header">
                    <div className="header__logo"></div>
                    <a className="header__office" href="#login">Войти</a>
                    <Naw />
                </header>
            </div>
        );
    }
}

export default Home;