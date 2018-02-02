import React, { Component } from 'react';
import './account.less';
import './login.less'

export default class Login extends Component {
    render() {
        const {emailValue} = this.props.emailValue;
        const {passwordValue} = this.props.passwordValue;
        return (
            <div id="login" className={this.props.className}>
                <a href="" title="Закрыть" className="login__close">X</a>
                <div className="login__header">Вход</div>
                <form className="account" onSubmit={this.props.onBtnClickHandler}>
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email" type="email" value={ emailValue } onChange={this.props.changeEmail} required />
                    <div className="account__password--picture"/>
                    <input className="account__password" name="password" placeholder="Password" type="password" value={ passwordValue } onChange={ this.props.changePassword } required />
                    {this.props.errorMessage ? <div className="account__error"> {this.props.errorMessage} </div> : <div className="account__error"></div>                    }
                    <button className="account__button" type = "submit">Войти</button>
                    <div className="account__create-account" onClick={ () => this.props.onHandleChangeModal({showSignup: true})} >Создать аккаунт</div>
                    <div className="account__forget-password" onClick={ () => this.props.onHandleChangeModal({showPassRecovery:true})}>Забыли пароль?</div>
                </form>
            </div>
        );
    }
}
