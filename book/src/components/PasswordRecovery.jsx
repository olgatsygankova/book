import React, { Component } from 'react';
import './account.less';
import './password-recovery.less'

export default class PasswordRecovery extends Component {

    render() {
        const {emailValue} = this.props.emailValue;
        return (
            <form id="singup" className={this.props.className} onSubmit={this.props.onBtnClickHandlerRecPass}>
                <a href="" title="Закрыть" className="singup__close">X</a>
                <div className="singup__header">Регистрация</div>
                <div className="account">
                    <span className="account__text-recovery-password">Введите Ваш e-mail адрес и на него Вам будет выслан новый пароль </span>
                    <div className="account__email--picture"/>
                    <input className="account__email" name="email" placeholder="Email"   type="email" value={ emailValue } onChange={this.props.changeEmail} required/>
                    {this.props.user.userName
                        ? <div className="account__message">Новый пароль выслан Вам на почту</div>
                        : <div className="account__error"> {this.props.errorMessage} </div>
                    }
                    <button className="account__button">Отправить запрос</button>
                    <div className="account__login-with-recover-password" onClick={() => this.handleOpenModal({showLogin:true})}>Войти</div>
                </div>
            </form>
        );
    }
}

