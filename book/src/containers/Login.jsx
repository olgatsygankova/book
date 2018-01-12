import React from 'react';
import './login.less';
import Account from '../components/AccountLogin';
import { Link } from 'react-router-dom';

export const Login = (props) =>

    <div id="login" className={props.className}>
        <a href="" title="Закрыть" className="login__close">X</a>
        <div className="login__header">Вход</div>
        <Account />
    </div>;




//<div className="login__header">Вход</div>