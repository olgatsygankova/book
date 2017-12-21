import React, { Component } from 'react';
import './office.less'
import './name-user.less'
import './email-user.less'
import './password-user.less'
import SectionBooks from './SectionBooks';
import LoadBook from './LoadBook';

const DataUser = (props) =>  <div className= {props.parentClassName}>
    <span className = {props.parentClassName + '__header'}>{props.name}</span>
    <input className={props.parentClassName + '__input'} name={props.parentClassName} />
</div>;

export default class Office extends Component {
    render() {
        return (
            <main>
                <section className="main__content">
                    <section className="office">
                        <div className="office__header">Личный кабинет</div>
                        <DataUser parentClassName='name-user' name='Имя'/>
                        <DataUser parentClassName='email-user' name='E-mail'/>
                        <DataUser parentClassName='password-user' name='Пароль'/>
                        <button className="office__load-book">Сохранить изменения</button>
                        <a className="office__load-book" href="#load-book">Загрузить книгу</a>
                    </section>
                    <SectionBooks />
                </section>
                <LoadBook />
            </main>
        );
    }
}






