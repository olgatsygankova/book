import React from 'react';
import './singup.less';
import Account from '../components/AccountSingup'

const Singup = () =>
    <div id="singup" className="singup">
        <a href="" title="Закрыть" className="singup__close">X</a>
        <div className="singup__header">Регистрация</div>
        <Account />
    </div>;

export default Singup;