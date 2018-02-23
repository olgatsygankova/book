import React, { Component } from 'react';
import './account.less';
import './login.less'

export default class Login extends Component {
    render() {
        const {emailValue, passwordValue, className, onBtnClickHandler, changeEmail, changePassword, errorMessage, onHandleChangeModal} = this.props;
        return (
            <div id="login" className={className}>
                <div className="login__header">Вход</div>
                <form className="account" onSubmit={onBtnClickHandler}>
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email" type="email" value={ emailValue } onChange={changeEmail} required />
                    <div className="account__password--picture"/>
                    <input className="account__password" name="password" placeholder="Password" type="password" value={ passwordValue } onChange={ changePassword } required />
                    {errorMessage ? <div className="account__error"> {errorMessage} </div> : <div className="account__error"></div>}
                    <button className="account__button" type = "submit">Войти</button>
                    <div className="account__create-account" onClick={ () => onHandleChangeModal({showSignup: true})} >Создать аккаунт</div>
                    <a href="" title="Закрыть" className="login__close">X</a>
                </form>
            </div>
        );
    }
}


