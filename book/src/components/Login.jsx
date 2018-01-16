import React, { Component } from 'react';
import './account.less';
import './login.less'
import { postlogin } from '../services/Authentication';
import { logout } from '../services/Authentication';

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

    onBtnClickHandler(){
        postlogin(this.state.emailValue, this.state.passwordValue).then(
            res => {
                this.setState({
                    res : res
                });
                this.state.res.errorMessage ? '' : this.handleOpenModal({});
            }
        );
    }

    render() {
        let errorMessage = this.state.res.errorMessage;
        return (
            <div id="login" className={this.props.className}>
                <a href="" title="Закрыть" className="login__close">X</a>
                <div className="login__header">Вход</div>
                <div className="account">
                    <input className="account__email" name="email" placeholder="Email" type="email" value={ this.emailValue } onChange={ this.handleChangeEmail } required />
                    <input className="account__password" name="password" placeholder="Password" type="password" value={ this.passwordValue } onChange={ this.handleChangePassword } required />
                    { errorMessage ? <div className="account__error"> {errorMessage} </div> : <div className="account__error" />}
                    <button className="account__button" onClick={this.onBtnClickHandler}>Войти</button>
                    <div className="account__create-account" onClick={ () => this.handleOpenModal({isSignup: true})} >Создать аккаунт</div>
                    <div className="account__forget-password" onClick={ () => this.handleOpenModal({isPassRecovery:true})}>Забыли пароль?</div>
                </div>
            </div>
        );
    }
}

// <input className="account__email" name="email" placeholder="Email" type="email" value={ emailValue } onChange={ handleChangeEmail } required />