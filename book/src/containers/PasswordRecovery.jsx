import React from 'react';
import './password-recovery.less';
import Account from '../components/AccountPasswordRecovery'

export const PasswordRecovery = (props) =>
    <div id="password-recovery" className={props.className}>
        <a href="" title="Закрыть" className="password-recovery__close">X</a>
        <div className="password-recovery__header">Восстановление пароля</div>
        <Account/>
    </div>;


