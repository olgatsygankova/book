import React, { Component } from 'react';
import './office.less'
import './name-user.less'
import './email-user.less'
import './password-user.less'
import SectionBooks from './SectionBooks';
import LoadBook from './LoadBook';

const DataUser = (props) =>  <div className= {props.className}>
    <label className = {props.className + '__header'}>{props.name}</label>
    <input className={props.className + '__input'} name={props.className} />
</div>;

export default class Office extends Component {
    render() {
        return (
            <main>
                <section className="main__content">
                    <section className="office">
                        <div className="office__header">Личный кабинет</div>
                        <DataUser className='name-user' name='Имя'/>
                        <DataUser className='email-user' name='E-mail'/>
                        <DataUser className='password-user' name='Пароль'/>
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






