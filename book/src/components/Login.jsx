import React, { Component } from 'react';
import './account.less';
import './login.less'
import { postlogin } from '../services/AuthenticationService';

export default class Login extends Component {
     constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
            passwordValue: '',
            res: ''
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
    }

    handleOpenModal(type) {
        this.props.onHandleChangeModal(type);
    }

    handleChangeEmail(e) {
        this.setState({
            emailValue: e.target.value
        });
    }

    handleChangePassword(e) {
        this.setState({
            passwordValue: e.target.value
        });
    }

    onBtnClickHandler(e){
        e.preventDefault();
        postlogin(this.state.emailValue, this.state.passwordValue, this.props.privatePath).then(
            res => {
                this.setState({
                    res : res
                });
                this.handleOpenModal(this.state.res.errorMessage ? {showLogin: true} : {});
            }
        );
    }
    render() {
        let errorMessage = this.state.res.errorMessage;
        return (
            <div id="login" className={this.props.className}>
                <a href="" title="Закрыть" className="login__close">X</a>
                <div className="login__header">Вход</div>
                <form className="account" onSubmit={this.onBtnClickHandler}>
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email" type="email" value={ this.emailValue } onChange={ this.handleChangeEmail } required />
                    <div className="account__password--picture"/>
                    <input className="account__password" name="password" placeholder="Password" type="password" value={ this.passwordValue } onChange={ this.handleChangePassword } required />
                    <div className="account__error"> {errorMessage ? errorMessage : ''} </div>
                    <button className="account__button" type = "submit">Войти</button>
                    <div className="account__create-account" onClick={ () => this.handleOpenModal({showSignup: true})} >Создать аккаунт</div>
                    <div className="account__forget-password" onClick={ () => this.handleOpenModal({showPassRecovery:true})}>Забыли пароль?</div>
                </form>
            </div>
        );
    }
}