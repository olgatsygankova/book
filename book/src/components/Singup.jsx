import React, { Component } from 'react';
import './account.less';
import './singup.less'

export default class Singup extends Component {

    render() {
        const {emailValue, passwordValue, className, onBtnClickHandlerSingup, changeEmail, changePassword, errorMessage, handleOpenLogin} = this.props;
        return (
            <div id="singup" className={className}>
                <div className="singup__header">Регистрация</div>
                <form className="account" onSubmit={onBtnClickHandlerSingup}>
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email" type="email" value={ emailValue } onChange={changeEmail} required/>
                    <div className="account__password--picture"/>
                    <input className="account__password" type="password" name="password" placeholder="Password" value={ passwordValue } onChange={ changePassword } required/>
                    {errorMessage ? <div className="account__error"> {errorMessage} </div> : <div className="account__error"></div>}
                    <button className="account__button">Создать аккаунт</button>
                    <span className="account__login-with-singup" onClick={ () => handleOpenLogin({showLogin:true})}>Войти</span>
                    <span className="account__text">если у вас уже есть аккаунт</span>
                    <a href="" title="Закрыть" className="singup__close">X</a>
                </form>
            </div>
        );
    }
}