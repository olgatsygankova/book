import React, { Component } from 'react';
import Nav from '../components/Nav';
import Search from '../components/Search';
import './header.less'
import {Login} from './Login';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'login'
        };
    }
    handleChangeClassForLogin(className) {
        this.setState({
            className: className
        });
    }
    render() {
        console.log (this.state.className);
        return (
            <header className="header">
                <div className="header__logo" />
                <button className="header__office" onClick={ () => this.handleChangeClassForLogin("login login--active") }>Войти</button>
                <Nav />
                <Search />
                <Login className={this.state.className === "login" ? "login" : this.state.className}/>
            </header>
        );
    }
}

