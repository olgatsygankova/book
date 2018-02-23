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
import {changeOfficeEmail, changeOfficePassword, changeOfficeUserName, loadGetUserById, updateOffice} from "../actions/user";
import {changeLoadBookTitle, changeLoadBookAuthor, changeLoadBookIsbn, changeLoadBookAnnotation, changeLoadBookGenre, loadCategoriesName, changeLoadBookText, changeLoadBookCover, loadNewBook } from '../actions/loadBook';
import {loadMyBooks} from "../actions/books";
import { showModal } from "../actions/auth";

class Office extends Component {

    componentDidMount() {
        this.props.loadGetUserById(getUserIdlocalStorage());
        this.props.loadMyBooks(getUserIdlocalStorage());
        this.props.loadCategoriesName();
    }

    handleFileBookChange(e) {
        const {changeLoadBookText} = this.props;
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
        const loadBook = this.props.loadBook;
        const userid = getUserIdlocalStorage();
        return (
            <main>
                <section className="main__content">
                    <section className="office">
                        <div className="office__header">Личный кабинет</div>
                        <div className="name-user">
                            <label className = 'name-user__header'>Имя</label>
                            <input className= 'name-user__input' name='userName' value={ this.props.officeUserNameValue } onChange={(e)=> this.props.changeOfficeUserName(e.target.value)}/>
                        </div>
                        <div className="email-user">
                            <label className = 'email-user__header'>E-mail</label>
                            <input className= 'email-user__input' name='userEmail' type="email" value={ this.props.officeEmailValue } onChange={(e)=> this.props.changeOfficeEmail(e.target.value)}/>
                        </div>
                        <div className="password-user">
                            <label className = 'password-user__header'>Пароль</label>
                            <input className= 'password-user__input' name='userPassword' type="password" value={ this.props.officePasswordValue } onChange={(e)=> this.props.changeOfficePassword(e.target.value) }/>
                        </div>
                            <button className="office__load-book" onClick={()=> this.props.updateOffice(userid, this.props.officeUserNameValue, this.props.officeEmailValue, this.props.officePasswordValue)}>Сохранить изменения</button>
                        <div className="office__load-book" onClick= { () => { this.props.showModal({showLoadBook:true})}}>Загрузить книгу</div>
                        <LoadBook className={this.props.showLoadBook ? "load-book load-book--active" : "load-book"}
                                  titleValue = {loadBook.titleValue}
                                  authorValue = {loadBook.authorValue}
                                  genreValue =  {loadBook.genreValue}
                                  isbnValue = {loadBook.isbnValue}
                                  coverValue = {loadBook.coverValue}
                                  annotationValue = {loadBook.annotationValue}
                                  changeTitle = {(e) => this.props.changeLoadBookTitle(e.target.value)}
                                  changeAuthor = {(e) => this.props.changeLoadBookAuthor(e.target.value)}
                                  changeGenre = {(e) =>  {this.props.changeLoadBookGenre(e)}}
                                  changeIsbn = {(e) => this.props.changeLoadBookIsbn(e.target.value)}
                                  changeAnnotation = {(e) => this.props.changeLoadBookAnnotation(e.target.value)}
                                  changeCover = {(e) => this.props.changeLoadBookCover(e.target.value)}
                                  showModalClose = { this.props.showModal}
                                  categoriesName = {loadBook.categoriesName}
                                  handleFileBookChange = {(e) => this.handleFileBookChange(e)}
                                  loadNewBook = {() => this.props.loadNewBook(loadBook.titleValue, loadBook.authorValue, loadBook.genreValue, loadBook.isbnValue, loadBook.annotationValue, loadBook.coverValue, loadBook.textValue)}
                        />
                    </section>
                    <SectionBooks books={this.props.myBooks} category="Мои книги"/>
                </section>
            </main>
        );
    }
}

export default connect(
    state => ({
        showLoadBook: state.auth.showModalTrue.showLoadBook,
        user: state.users.user,
        myBooks: state.books.myBooks,
        officeEmailValue: state.users.officeEmailValue,
        officePasswordValue: state.users.officePasswordValue,
        officeUserNameValue: state.users.officeUserNameValue,
        loadBook: state.loadBook
    }),
    dispatch => ({
        showModal: bindActionCreators(showModal, dispatch),
        changeOfficeEmail: bindActionCreators(changeOfficeEmail, dispatch),
        changeOfficePassword: bindActionCreators(changeOfficePassword, dispatch),
        changeOfficeUserName: bindActionCreators(changeOfficeUserName, dispatch),
        loadGetUserById: bindActionCreators(loadGetUserById, dispatch),
        changeLoadBookTitle: bindActionCreators(changeLoadBookTitle, dispatch),
        changeLoadBookAuthor: bindActionCreators(changeLoadBookAuthor, dispatch),
        changeLoadBookIsbn: bindActionCreators(changeLoadBookIsbn, dispatch),
        changeLoadBookAnnotation: bindActionCreators(changeLoadBookAnnotation, dispatch),
        changeLoadBookGenre: bindActionCreators(changeLoadBookGenre, dispatch),
        changeLoadBookText: bindActionCreators(changeLoadBookText, dispatch),
        changeLoadBookCover: bindActionCreators(changeLoadBookCover, dispatch),
        updateOffice: bindActionCreators(updateOffice, dispatch),
        loadMyBooks: bindActionCreators(loadMyBooks, dispatch),
        loadCategoriesName: bindActionCreators(loadCategoriesName, dispatch),
        loadNewBook: bindActionCreators(loadNewBook, dispatch)
    })
)(Office)