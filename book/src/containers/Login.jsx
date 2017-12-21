import React from 'react';
import './login.less';
import Account from '../components/AccountLogin'

const Login = () =>
    <div id="login" className="login">
        <a href="" title="Закрыть" className="login__close">X</a>
        <div className="login__header">Вход</div>
        <Account />
    </div>;

export default Login;