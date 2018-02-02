import React, { Component } from 'react';
import './account.less';
import './singup.less'

export default class Singup extends Component {

    render() {
        const {emailValue} = this.props.emailValue;
        const {passwordValue} = this.props.passwordValue;
        return (
            <div id="singup" className={this.props.className}>
                <a href="" title="Закрыть" className="singup__close">X</a>
                <div className="singup__header">Регистрация</div>
                <form className="account" onSubmit={this.props.onBtnClickHandlerSingup}>
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email" type="email" value={ emailValue } onChange={this.props.changeEmail} required/>
                    <div className="account__password--picture"/>
                    <input className="account__password" type="password" name="password" placeholder="Password" value={ passwordValue } onChange={ this.props.changePassword } required/>
                    {this.props.errorMessage ? <div className="account__error"> {this.props.errorMessage} </div> : <div className="account__error"></div>}
                    <button className="account__button">Создать аккаунт</button>
                    <span className="account__login-with-singup" onClick={ () => this.props.handleOpenLogin({showLogin:true})}>Войти</span>
                    <span className="account__text">если у вас уже есть аккаунт</span>
                </form>
            </div>
        );
    }
}