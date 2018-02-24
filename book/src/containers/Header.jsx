import React, { Component } from 'react';
import './header.less'
import Nav from '../components/Nav';
import Search from './Search';
import Login from '../components/Login';
import Singup from '../components/Singup';
import { checkAuth } from '../services/AuthenticationService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from "../actions/auth";

class Header extends Component {
    componentWillReceiveProps (nextProps){
        const {showModal} = this.props.authActions;
        const {showModalTrue } = this.props.auth;
        if (nextProps.auth.user.token && (showModalTrue.showLogin || showModalTrue.showSignup)) {
            showModal({showLogin: false, privatePath:showModalTrue.privatePath})
        }
    }
     render() {
        const {showModalTrue, emailValueLogin, passwordValueLogin, emailValueSingup, passwordValueSingup, menuDisplay, error} = this.props.auth;
        const {logout, showModal, changeMenuDisplay, changeEmailLogin, changePasswordLogin, login, singup, changeEmailSingup, changePasswordSingup } = this.props.authActions;
        return (
            <header className="header" ref={(div)=>{this._header = div}}>
                <div className="header__logo" />
                <button className="header__office" onClick= { () => {checkAuth() ?  logout() : showModal({showLogin:true})}}> {checkAuth() ? "Выйти" : "Войти"}</button>
                <Nav handleOnPrivate={(e)=> showModal(e)} changeMenuDisplay ={changeMenuDisplay} menuDisplay = {menuDisplay} />
                <Search />
                <Login {...this.props}
                        className={showModalTrue.showLogin ? "login login--active" : "login"}
                        onBtnClickHandler={(e)=>{ e.preventDefault();
                           login (emailValueLogin, passwordValueLogin, showModalTrue.privatePath)}}
                      />
                <Singup {...this.props}
                        className={showModalTrue.showSignup ? "singup singup--active" : "singup"}
                        onBtnClickHandlerSingup={(e)=> {e.preventDefault();
                            singup (emailValueSingup, passwordValueSingup, showModalTrue.privatePath)}}/>
            </header>
        );
    }
}

export default connect(
    state => ({
        auth: state.auth,
        users: state.users
    }),
    dispatch => ({
        authActions: bindActionCreators(authActions, dispatch)
    })
)(Header)
