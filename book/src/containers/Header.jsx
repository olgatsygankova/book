import React, { Component } from 'react';
import './header.less'
import Nav from '../components/Nav';
import Search from '../components/Search';
import Login from '../components/Login';
import Singup from '../components/Singup';
import PasswordRecovery from '../components/PasswordRecovery';
import { checkAuth } from '../services/AuthenticationService';
import { logout } from '../services/AuthenticationService'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            showSignup: false,
            showPassRecovery: false,
            privatePath: ''
        };
        this.handleModal = this.handleModal.bind(this);
        this.handleLogout = this.handleModal.bind(this);
        this.handleChangePrivatePath = this.handleChangePrivatePath.bind(this);
    }

    handleChangePrivatePath(path) {
        this.setState({
            privatePath: path
        });
        this.handleModal({showLogin: true});
    }

    handleModal (type) {
        this.setState({
            showLogin: type.showLogin || false,
            showSignup: type.showSignup || false,
            showPassRecovery: type.showPassRecovery || false
        });
    }

     render() {
        return (
            <header className="header" ref={(div)=>{this._header = div}}>
                <div className="header__logo" />
                <button className="header__office" onClick= { () => {checkAuth() ?  logout() : this.handleModal({showLogin:true})}}>{checkAuth() ? "Выйти" : "Войти"}</button>
                <Nav handleOnPrivate={this.handleChangePrivatePath} />
                <Search />
                <Login className={this.state.showLogin ? "login login--active" : "login"} onHandleChangeModal={this.handleModal} privatePath={this.state.privatePath} />
                <Singup className={this.state.showSignup ? "singup singup--active" : "singup"} onHandleChangeModal={this.handleModal}/>
                <PasswordRecovery className={this.state.showPassRecovery ? "password-recovery password-recovery--active" : "password-recovery"} onHandleChangeModal={this.handleModal}/>
            </header>
        );
    }
}