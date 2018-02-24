import React, { Component } from 'react';
import './account.less';
import './singup.less'

export default class Singup extends Component {

    render() {
      //  const {emailValue, passwordValue, className, onBtnClickHandlerSingup, changeEmail, changePassword, errorMessage, handleOpenLogin} = this.props;
        const {className, onBtnClickHandlerSingup} = this.props;
        const {emailValueSingup, passwordValueSingup, error} = this.props.auth;
        const {changeEmailSingup, changePasswordSingup, showModal} = this.props.authActions;
        return (
            <div id="singup" className={className}>
                <div className="singup__header">Регистрация</div>
                <form className="account" onSubmit={onBtnClickHandlerSingup}>
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email" type="email" value={ emailValueSingup } onChange={(e) => changeEmailSingup(e.target.value) } required/>
                    <div className="account__password--picture"/>
                    <input className="account__password" type="password" name="password" placeholder="Password" value={ passwordValueSingup } onChange={(e) => changePasswordSingup(e.target.value) } required/>
                    {error ? <div className="account__error"> {error} </div> : <div className="account__error"></div>}
                    <button className="account__button">Создать аккаунт</button>
                    <span className="account__login-with-singup" onClick={ () => showModal({showLogin:true})}>Войти</span>
                    <span className="account__text">если у вас уже есть аккаунт</span>
                    <a href="" title="Закрыть" className="singup__close">X</a>
                </form>
            </div>
        );
    }
}