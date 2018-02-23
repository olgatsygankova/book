import React, { Component } from 'react';
import './nav.less';
import { NavLink } from 'react-router-dom';
import { checkAuth } from '../services/AuthenticationService';

export default class Nav extends Component {

    handleOffice (e) {
        const {handleOnPrivate} = this.props;
        let path = e.target.pathname;
        if(checkAuth()) {
            return handleOnPrivate({privatePath: path})
        } else {
            e.preventDefault();
            handleOnPrivate({showLogin: true, privatePath: path});
        }
    }

    handleChangePage (e) {
        let path = e.target.pathname;
        this.props.handleOnPrivate({privatePath: path});
    }

    render() {
        return (
            <div className="header__nav nav">
                <input id="toggle" type="checkbox" />
                <label className="toggle-container" htmlFor="toggle">
                    <span className="button button-toggle" />
                </label>
                <nav className="nav__menu">
                    <NavLink exact to={'/'} className="nav__menu-item nav__menu-item--home" activeClassName="nav__menu-item--home--active" onClick={ (e) => this.handleChangePage(e)}>Главная</NavLink>
                    <NavLink to={'/user'} className="nav__menu-item nav__menu-item--my-office" activeClassName="nav__menu-item--my-office--active" onClick={ (e) => this.handleOffice(e)}>Личный кабинет</NavLink>
                    <NavLink to={'/info'} className="nav__menu-item nav__menu-item nav__menu-item--about" activeClassName="nav__menu-item--about--active" onClick={ (e) => this.handleChangePage(e)}>Справка </NavLink>
                </nav>
            </div>
        );
    };
}
