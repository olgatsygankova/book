import React, { Component } from 'react';
import './office.less'
import './name-user.less'
import './email-user.less'
import './password-user.less'
import SectionBooks from '../containers/SectionBooks';
import LoadBook from './LoadBook';
import {getUserById, getUserIdlocalStorage} from "../services/UsersService";

export default class Office extends Component {
    constructor(props) {
        super(props);
        this.state = {
                userName: '',
                userEmail: '',
                userPassword: '',
                books: []
        };
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeUserEmail = this.handleChangeUserEmail.bind(this);
        this.handleChangeUserPassword = this.handleChangeUserPassword.bind(this);
    }

    componentDidMount() {
        getUserById(getUserIdlocalStorage()).then(
            user => this.setState({
                userName: user.userName,
                userEmail: user.email,
                userPassword: user.password,
                books: user.books
            })
        );
    }

    handleChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    handleChangeUserEmail(e) {
        this.setState({
            userEmail: e.target.value
        });
    }

    handleChangeUserPassword(e) {
        this.setState({
            userPassword: e.target.value
        });
    }

    render() {
        const user = this.state;
        return (
            <main>
                <section className="main__content">
                    <section className="office">
                        <div className="office__header">Личный кабинет</div>
                        <div className="name-user">
                            <label className = 'name-user__header'>Имя</label>
                            <input className= 'name-user__input' name='userName' value={ user.userName } onChange={ this.handleChangeUserName }/>
                        </div>
                        <div className="email-user">
                            <label className = 'email-user__header'>E-mail</label>
                            <input className= 'email-user__input' name='userEmail' type="email" value={ user.userEmail } onChange={ this.handleChangeUserEmail }/>
                        </div>
                        <div className="password-user">
                            <label className = 'password-user__header'>Пароль</label>
                            <input className= 'password-user__input' name='userPassword' type="password" value={ user.userPassword } onChange={ this.handleChangeUserPassword }/>
                        </div>
                            <button className="office__load-book">Сохранить изменения</button>
                        <a className="office__load-book" href="#load-book">Загрузить книгу</a>
                    </section>
                    <SectionBooks books={user.books} category="Мои книги"/>
                </section>
                <LoadBook />
            </main>
        );
    }
}