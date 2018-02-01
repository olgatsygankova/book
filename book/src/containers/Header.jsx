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
import {showModal, changeEmailR, changePasswordR, login, singup, logout, recoveryPassword} from "../actions/index";

class Header extends Component {
    componentWillReceiveProps (nextProps){
        if (nextProps.user.userName && (this.props.showModalTrue.showLogin || this.props.showModalTrue.showSignup)) {
            this.props.showModal({showLogin: false, privatePath:this.props.showModalTrue.privatePath})
        }
    }
     render() {
        return (
            <header className="header" ref={(div)=>{this._header = div}}>
                <div className="header__logo" />
                <button className="header__office" onClick= { () => {checkAuth() ?  this.props.logout() : this.props.showModal({showLogin:true})}}> {checkAuth() ? "Выйти" : "Войти"}</button>
                <Nav handleOnPrivate={(e)=> this.props.showModal(e)} />
                <Search />
                <Login className={this.props.showModalTrue.showLogin ? "login login--active" : "login"}
                       onHandleChangeModal={(e)=> this.props.showModal (e)}
                       privatePath={this.props.showModalTrue.privatePath}
                       changeEmail={(e)=>this.props.changeEmailR(e.target.value)}
                       changePassword ={(e)=> this.props.changePasswordR(e.target.value)}
                       emailValue = {this.props.emailValue}
                       passwordValue = {this.props.passwordValue}
                       onBtnClickHandler={(e)=>{ e.preventDefault();
                           this.props.login (this.props.emailValue, this.props.passwordValue, this.props.showModalTrue.privatePath)}}
                       errorMessage = {this.props.users.error}/>
                <Singup className={this.props.showModalTrue.showSignup ? "singup singup--active" : "singup"}
                        handleOpenLogin={()=> this.props.showModal({showLogin:true})}
                        onBtnClickHandlerSingup={(e)=> {e.preventDefault();
                            this.props.singup (this.props.emailValue, this.props.passwordValue, this.props.showModalTrue.privatePath);}}
                        changeEmail={(e)=>this.props.changeEmailR(e.target.value)}
                        changePassword ={(e)=> this.props.changePasswordR(e.target.value)}
                        emailValue = {this.props.emailValue}
                        passwordValue = {this.props.passwordValue}
                        errorMessage = {this.props.users.error}/>
                <PasswordRecovery className={this.props.showModalTrue.showPassRecovery ? "password-recovery password-recovery--active" : "password-recovery"}
                                  onHandleChangeModal={()=> this.props.showModal({showLogin:true})}
                                  emailValue = {this.props.emailValue}
                                  changeEmail={(e)=>this.props.changeEmailR(e.target.value)}
                                  onBtnClickHandlerRecPass = {(e)=> { e.preventDefault();
                                      this.props.recoveryPassword (this.props.emailValue, this.props.showModalTrue.privatePath);}}
                                  user = {this.props.user}
                                  errorMessage = {this.props.users.error}/>
            </header>
        );
    }
}

export default connect(
    state => ({
        showModalTrue: state.users.showModalTrue,
        emailValue: state.users.emailValue,
        passwordValue: state.users.passwordValue,
        user: state.users.user,
        users: state.users
    }),
    dispatch => ({
        showModal: bindActionCreators(showModal, dispatch),
        changeEmailR: bindActionCreators(changeEmailR, dispatch),
        changePasswordR: bindActionCreators(changePasswordR, dispatch),
        login: bindActionCreators(login, dispatch),
        singup: bindActionCreators(singup, dispatch),
        recoveryPassword: bindActionCreators(recoveryPassword, dispatch),
        logout: bindActionCreators(logout, dispatch)
    })
)(Header)