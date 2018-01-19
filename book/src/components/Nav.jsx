import React, { Component } from 'react';
import './nav.less';
import { NavLink } from 'react-router-dom';
import { checkAuth } from '../services/AuthenticationService';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: ''
        };
    }

    handleOffice (e) {
        if(checkAuth()) return;
        e.preventDefault();
        let path = e.target.pathname;
        this.props.handleOnPrivate(path);
    }

    render() {
        return (
            <div className="header__nav nav">
                <input id="toggle" type="checkbox" />
                <label className="toggle-container" htmlFor="toggle">
                    <span className="button button-toggle" />
                </label>
                <nav className="nav__menu">
                    <NavLink exact to={'/'} className="nav__menu-item nav__menu-item--home" activeClassName="nav__menu-item--home--active">Главная</NavLink>
                    <NavLink to={'/user'} className="nav__menu-item nav__menu-item--my-office" activeClassName="nav__menu-item--my-office--active" onClick={ (e) => this.handleOffice(e)}>Личный кабинет</NavLink>
                    <a className="nav__menu-item nav__menu-item--download-book" href="">Загрузить книгу</a>
                </nav>
            </div>
        );
    };
}