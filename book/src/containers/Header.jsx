import React, { Component } from 'react';
import './header.less'
import Nav from '../components/Nav';
import Search from '../components/Search';
import Login from '../components/Login';
import Singup from '../components/Singup';
import PasswordRecovery from '../components/PasswordRecovery';
import { checkAuth } from '../services/AuthenticationService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {showModal, login, singup, logout, recoveryPassword, changeEmailLogin, changeEmailPassRec, changeEmailSingup, changePasswordLogin, changePasswordSingup} from "../actions/auth";

class Header extends Component {
    componentWillReceiveProps (nextProps){
        if (nextProps.users.user.username && (this.props.auth.showModalTrue.showLogin || this.props.auth.showModalTrue.showSignup)) {
            this.props.showModal({showLogin: false, privatePath:this.props.auth.showModalTrue.privatePath})
        }
    }
     render() {
        const showModalTrue = this.props.auth.showModalTrue;
        const emailValueLogin = this.props.auth.emailValueLogin;
        const passwordValueLogin = this.props.auth.passwordValueLogin;
        const emailValueSingup = this.props.auth.emailValueSingup;
        const passwordValueSingup = this.props.auth.passwordValueSingup;
        const emailValuePassRec = this.props.auth.emailValuePassRec;
        const authorization = this.props;
        const userId = this.props.users.user.id;

        return (
            <header className="header" ref={(div)=>{this._header = div}}>
                <div className="header__logo" />
                <button className="header__office" onClick= { () => {checkAuth() ?  authorization.logout() : authorization.showModal({showLogin:true})}}> {checkAuth() ? "Выйти" : "Войти"}</button>
                <Nav handleOnPrivate={(e)=> authorization.showModal(e)} />
                <Search />
                <Login className={showModalTrue.showLogin ? "login login--active" : "login"}
                       onHandleChangeModal={(e)=> authorization.showModal (e)}
                       privatePath={showModalTrue.privatePath}
                       changeEmail={(e)=>authorization.changeEmailLogin(e.target.value)}
                       changePassword ={(e)=> authorization.changePasswordLogin(e.target.value)}
                       emailValue = {emailValueLogin}
                       passwordValue = {passwordValueLogin}
                       onBtnClickHandler={(e)=>{ e.preventDefault();
                           authorization.login (emailValueLogin, passwordValueLogin, showModalTrue.privatePath)}}
                       errorMessage = {authorization.auth.error}/>
                <Singup className={showModalTrue.showSignup ? "singup singup--active" : "singup"}
                        handleOpenLogin={()=> authorization.showModal({showLogin:true})}
                        onBtnClickHandlerSingup={(e)=> {e.preventDefault();
                            authorization.singup (emailValueSingup, passwordValueSingup, showModalTrue.privatePath);}}
                        changeEmail={(e)=>authorization.changeEmailSingup(e.target.value)}
                        changePassword ={(e)=> authorization.changePasswordSingup(e.target.value)}
                        emailValue = {emailValueSingup}
                        passwordValue = {passwordValueSingup}
                        errorMessage = {authorization.auth.error}/>
                <PasswordRecovery className={showModalTrue.showPassRecovery ? "password-recovery password-recovery--active" : "password-recovery"}
                                  onHandleChangeModal={()=> authorization.showModal({showLogin:true})}
                                  emailValue = {emailValuePassRec}
                                  changeEmail={(e)=>authorization.changeEmailPassRec(e.target.value)}
                                  onBtnClickHandlerRecPass = {(e)=> { e.preventDefault();
                                      authorization.recoveryPassword (emailValuePassRec, showModalTrue.privatePath);}}
                                  user = {userId}
                                  errorMessage = {authorization.auth.error}/>
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
        showModal: bindActionCreators(showModal, dispatch),
        changeEmailLogin: bindActionCreators(changeEmailLogin, dispatch),
        changePasswordLogin: bindActionCreators(changePasswordLogin, dispatch),
        changeEmailSingup: bindActionCreators(changeEmailSingup, dispatch),
        changePasswordSingup: bindActionCreators(changePasswordSingup, dispatch),
        changeEmailPassRec: bindActionCreators(changeEmailPassRec, dispatch),
        login: bindActionCreators(login, dispatch),
        singup: bindActionCreators(singup, dispatch),
        recoveryPassword: bindActionCreators(recoveryPassword, dispatch),
        logout: bindActionCreators(logout, dispatch)
    })
)(Header)