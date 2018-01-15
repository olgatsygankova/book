import React, { Component } from 'react';
import './account.less';
import './login.less'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this. handleChangeEmail = this. handleChangeEmail.bind(this);
    }

    handleOpenModal(type) {
        this.props.onHandleChangeModal(type);
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    render() {
        return (
            <div id="login" className={this.props.className}>
                <a href="" title="Закрыть" className="login__close">X</a>
                <div className="login__header">Вход</div>
                <div className="account">
                    <input className="account__email" name="email" placeholder="Email" type="email" required />
                    <input className="account__password" type="password" name="password" placeholder="Password"/>
                    <button className="account__button">Войти</button>
                    <div className="account__create-account" onClick={ () => this.handleOpenModal({isSignup: true})} >Создать аккаунт</div>
                    <div className="account__forget-password" onClick={ () => this.handleOpenModal({isPassRecovery:true})}>Забыли пароль?</div>
                </div>
            </div>
        );
    }
}

// <input className="account__email" name="email" placeholder="Email" type="email" value={ emailValue } onChange={ handleChangeEmail } required />