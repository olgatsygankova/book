import React, { Component } from 'react';
import './account.less';
import {Singup} from '../containers/Singup';
import {PasswordRecovery} from '../containers/PasswordRecovery';

export default class AccountLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classNameForSingup: "singup",
            classNameForForgetPassword: "password-recovery",
            isSignUp: false,
            isPswdRecover: false
        };
    }
    handleOpenSignUp(visible) {
        this.setState({
            isSignUp: visible
        });
    }

    handleOpenPassRecovery(visible) {
        this.setState({
            isPswdRecovery: visible
        });
    }

    handleChangeClassForSingup(classNameForSingup) {
        this.setState({
            classNameForSingup: classNameForSingup
        });
    }
    handleChangeClassForForgetPassword(classNameForForgetPassword) {
        this.setState({
            classNameForForgetPassword: classNameForForgetPassword
        });
    }
    render() {
        return (
            <div className="account">
                <input className="account__email" name="email" placeholder="Email"/>
                <input className="account__password" type="password" name="password" placeholder="Password"/>
                <button className="account__button">Войти</button>
                <div className="account__forget-password" onClick={ () => this.handleOpenPassRecovery(true)}>Забыли пароль?</div>
                <PasswordRecovery className={this.state.isPswdRecovery ? "password-recovery password-recovery--active" : "password-recovery"}/>
            </div>
        );
    }
}
/*<button className="header__office" onClick={ () => this.handleChangeClassForLogin("login login--active") }>Войти</button>


<a href="#password-recovery" className="account__forget-password">Забыли пароль?</a>
<a href="#singup" className="account__create-account">Создать аккаунт</a>

<button className="account__forget-password" onClick={ () => this.handleChangeClassForLogin("login login--active") }>Войти</button>
*/

/*
<div className="account__forget-password" onClick={ () => this.handleChangeClassForForgetPassword("password-recovery password-recovery--active") }>Забыли пароль?</div>
                <div className="account__create-account" onClick={ () => this.handleChangeClassForSingup("singup singup--active") }>Создать аккаунт</div>
                { (this.state.classNameForSingup === "singup" ) ?
                    <Singup classNameForSingup="singup"/> : <Singup classNameForSingup={this.state.classNameForSingup}/>
                }
                { (this.state.classNameForForgetPassword === "password-recovery" ) ?
                    <PasswordRecovery classNameForForgetPassword="password-recovery"/> : <PasswordRecovery classNameForForgetPassword={this.state.classNameForForgetPassword}/>
                }
 */