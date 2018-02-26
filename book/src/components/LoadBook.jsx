import React, { Component } from 'react';
import './load-book.less';
import './book-characteristic.less';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

export default class LoadBook extends Component {

    validationGenre (genreValue, e) {
        let check = document.getElementById("check");
        const {loadNewBook} = this.props;
            if (check && genreValue && genreValue.length === 0) {
                check.children[2].firstChild.setCustomValidity("Please fill out this field");
            } else {
                check.children[2].firstChild.setCustomValidity("");
                loadNewBook();
            }
    }

    render() {
        const {className, handleFileBookChange, textValue} = this.props;
        const {changeLoadBookTitle, changeLoadBookAuthor, changeLoadBookGenre, changeLoadBookIsbn, changeLoadBookAnnotation, changeLoadBookCover} = this.props.loadBookActions;
        const {titleValue, authorValue, genreValue, isbnValue, annotationValue, coverValue, categoriesName} = this.props.loadBook;
        let content = categoriesName ? categoriesName.map((categoriesName, j) => {
            return (
                <label key={j} className="book-characteristic__genre--box"><Checkbox value={categoriesName.id} />{categoriesName.name}</label>
            );
        }):  '';
        return (
            <div id="load-book" className={className}>
                <form className="book-characteristic">
                    <input className="book-characteristic__title book-characteristic__text" name="title" placeholder="Название"  value={titleValue } onChange={(e) => changeLoadBookTitle(e.target.value)} required />
                    <input className="book-characteristic__author book-characteristic__text" name="author" placeholder="Автор"  value={ authorValue } onChange={(e) => changeLoadBookAuthor(e.target.value)} required/>
                    <div className="book-characteristic__header"> Выберите жанр книги</div>
                    <input type="hidden" id="check2" value={genreValue && genreValue.length !== 0} />
                    <CheckboxGroup className="book-characteristic__genre" name="categories" value={genreValue} onChange={(e) => changeLoadBookGenre(e)} id="check"> {content} </CheckboxGroup>
                    <input className="book-characteristic__isbn book-characteristic__text" name="isbn" placeholder="ISBN"  value={ isbnValue } onChange={(e) => changeLoadBookIsbn(e.target.value)} />
                    <textarea className="book-characteristic__annotation book-characteristic__text" name="annotation" placeholder="Аннотация"  value={ annotationValue } onChange={(e) => changeLoadBookAnnotation(e.target.value)}/>
                    <input className="book-characteristic__picture book-characteristic__text" name="picture" placeholder="URL обложки книги"  value={ coverValue } onChange={(e) => changeLoadBookCover(e.target.value)} />
                    <div className="book-characteristic__header"> Выберите файл с текстом книги</div>
                    <input className="book-characteristic__file book-characteristic__text"
                           type="file"
                           value ={ textValue }
                           onChange={(e)=>handleFileBookChange(e)} required/>
                    <button className="book-characteristic__load" onClick={(e) => this.validationGenre (genreValue, e)}>Загрузить</button>
                    <a href="" title="Закрыть" className="load-book__close">X</a>
                </form>
            </div>
        );
    }
}