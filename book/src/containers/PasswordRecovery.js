import React from 'react';
import './password-recovery.less';
import Account from '../components/AccountPasswordRecovery'

const PasswordRecovery = () =>
    <div id="password-recovery" className="password-recovery">
        <a href="" title="Закрыть" className="password-recovery__close">X</a>
        <div className="password-recovery__header">Восстановление пароля</div>
        <Account />
    </div>;

export default PasswordRecovery;