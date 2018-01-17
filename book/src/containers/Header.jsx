import React, { Component } from 'react';
import './header.less'
import Nav from '../components/Nav';
import Search from '../components/Search';
import Login from '../components/Login';
import Singup from '../components/Singup';
import PasswordRecovery from '../components/PasswordRecovery';
import { checkAuth } from '../services/Authentication';
import { logout } from '../services/Authentication'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            isSignup: false,
            isPassRecovery: false,
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

        this.handleModal({isLogin: true});
    }

    handleModal (type) {
        this.setState({
            isLogin: type.isLogin || false,
            isSignup: type.isSignup || false,
            isPassRecovery: type.isPassRecovery || false
        });
    }

     render() {
        return (
            <header className="header">
                <div className="header__logo" />
                {checkAuth() ? <button className="header__office" onClick={ () => logout()}>Выйти</button> : <button className="header__office" onClick={ () => this.handleModal({isLogin:true})}>Войти</button>}
                <Nav handleOnPrivate={this.handleChangePrivatePath} />
                <Search />
                <Login className={this.state.isLogin ? "login login--active" : "login"} onHandleChangeModal={this.handleModal} privatePath={this.state.privatePath} />
                <Singup className={this.state.isSignup ? "singup singup--active" : "singup"} onHandleChangeModal={this.handleModal}/>
                <PasswordRecovery className={this.state.isPassRecovery ? "password-recovery password-recovery--active" : "password-recovery"} onHandleChangeModal={this.handleModal}/>
            </header>
        );
    }
}

