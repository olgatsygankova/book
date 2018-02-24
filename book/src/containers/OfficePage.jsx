import React, { Component } from 'react';
import './office.less';
import '../components/name-user.less';
import '../components/email-user.less';
import '../components/password-user.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SectionBooks from '../containers/SectionBooks';
import LoadBook from '../components/LoadBook';
import {getUserIdlocalStorage} from "../services/UsersService";
import * as userActions from "../actions/user";
import * as loadBookActions from '../actions/loadBook';
import {loadMyBooks} from "../actions/books";
import { showModal } from "../actions/auth";

class Office extends Component {

    componentDidMount() {
        const {loadGetUserById} = this.props.userActions;
        const {loadMyBooks} = this.props;
        const {loadCategoriesName} = this.props.loadBookActions;
        loadGetUserById(getUserIdlocalStorage());
        loadMyBooks(getUserIdlocalStorage());
        loadCategoriesName();
    }

    handleFileBookChange(e) {
        const {changeLoadBookText} = this.props.loadBookActions;
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.readAsText(file, 'CP1251');
        let bookText;
        reader.onloadend = () => {
            bookText = reader.result;
            changeLoadBookText(bookText);
        };
    }

    render() {
        const {officeUserNameValue, officeEmailValue, officePasswordValue} = this.props.userOffice;
        const {changeOfficeUserName, changeOfficeEmail, changeOfficePassword, updateOffice} = this.props.userActions;
        const {titleValue, authorValue, genreValue, isbnValue, coverValue, annotationValue, textValue} = this.props.loadBook;
        const {loadNewBook} = this.props.loadBookActions;
        const {myBooks} = this.props;
        const userid = getUserIdlocalStorage();
        return (
            <main>
                <section className="main__content">
                    <section className="office">
                        <div className="office__header">Личный кабинет</div>
                        <div className="name-user">
                            <label className = 'name-user__header'>Имя</label>
                            <input className= 'name-user__input' name='userName' value={officeUserNameValue} onChange={(e)=> changeOfficeUserName(e.target.value)}/>
                        </div>
                        <div className="email-user">
                            <label className = 'email-user__header'>E-mail</label>
                            <input className= 'email-user__input' name='userEmail' type="email" value={officeEmailValue} onChange={(e)=> changeOfficeEmail(e.target.value)}/>
                        </div>
                        <div className="password-user">
                            <label className = 'password-user__header'>Пароль</label>
                            <input className= 'password-user__input' name='userPassword' type="password" value={ officePasswordValue } onChange={(e)=> changeOfficePassword(e.target.value) }/>
                        </div>
                            <button className="office__load-book" onClick={()=> updateOffice(userid, officeUserNameValue, officeEmailValue, officePasswordValue)}>Сохранить изменения</button>
                        <div className="office__load-book" onClick= { () => { this.props.showModal({showLoadBook:true})}}>Загрузить книгу</div>
                        <LoadBook
                            className={this.props.showLoadBook ? "load-book load-book--active" : "load-book"}
                            handleFileBookChange = {(e) => this.handleFileBookChange(e)}
                            {...this.props}
                            loadNewBook = {() => loadNewBook(titleValue, authorValue, genreValue, isbnValue, annotationValue, coverValue, textValue)}
                        />
                    </section>
                    <SectionBooks books={myBooks} category="Мои книги"/>
                </section>
            </main>
        );
    }
}

export default connect(
    state => ({
        showLoadBook: state.auth.showModalTrue.showLoadBook,
        userOffice: state.users,
        myBooks: state.books.myBooks,
        loadBook: state.loadBook
    }),
    dispatch => ({
        showModal: bindActionCreators(showModal, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        loadBookActions: bindActionCreators(loadBookActions, dispatch),
        loadMyBooks: bindActionCreators(loadMyBooks, dispatch)
    })
)(Office)