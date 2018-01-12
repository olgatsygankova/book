import React from 'react';
import './singup.less';
import Account from '../components/AccountSingup'

export const Singup = (props) =>

    <div id="singup" className={props.classNameForSingup}>
        <a href="" title="Закрыть" className="singup__close">X</a>
        <div className="singup__header">Регистрация</div>
        <Account />
    </div>;

