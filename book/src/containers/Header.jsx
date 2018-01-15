import React, { Component } from 'react';
import './header.less'
import Nav from '../components/Nav';
import Search from '../components/Search';
import Login from '../components/Login';
import Singup from '../components/Singup';
import PasswordRecovery from '../components/PasswordRecovery';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            isSignup: false,
            isPassRecovery: false
        };
        this.handleModal = this.handleModal.bind(this);
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
                <button className="header__office" onClick={ () => this.handleModal({isLogin:true})}>Войти</button>
                <Nav />
                <Search />
                <Login className={this.state.isLogin ? "login login--active" : "login"} onHandleChangeModal={this.handleModal} />
                <Singup className={this.state.isSignup ? "singup singup--active" : "singup"} onHandleChangeModal={this.handleModal}/>
                <PasswordRecovery className={this.state.isPassRecovery ? "password-recovery password-recovery--active" : "password-recovery"} onHandleChangeModal={this.handleModal}/>
            </header>
        );
    }
}

