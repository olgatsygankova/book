import React, { Component } from 'react';
import './load-book.less';
import './book-characteristic.less';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

export default class LoadBook extends Component {
    render() {
        const {className, loadNewBook,
            titleValue, changeTitle,
            authorValue, changeAuthor,
            genreValue, changeGenre,
            isbnValue, changeIsbn,
            annotationValue, changeAnnotation,
            coverValue, changeCover,
            textValue, handleFileBookChange,
            categoriesName
        } = this.props;
        let content = categoriesName ? categoriesName.map((categoriesName, j) => {
            return (
                <div key={j} className="book-characteristic__genre--box"><Checkbox value={categoriesName.id} />{categoriesName.name}</div>
            );
        }):  '';
        return (
            <div id="load-book" className={className}>
                <form className="book-characteristic" onSubmit = {loadNewBook}>
                    <input className="book-characteristic__title book-characteristic__text" name="title" placeholder="Название"  value={titleValue } onChange={changeTitle} required />
                    <input className="book-characteristic__author book-characteristic__text" name="author" placeholder="Автор"  value={ authorValue } onChange={changeAuthor} required/>
                    <div className="book-characteristic__header"> Выберите жанр книги</div>
                    <CheckboxGroup className="book-characteristic__genre" name="categories" value={genreValue} onChange={changeGenre} required> {content} </CheckboxGroup>
                    <input className="book-characteristic__isbn book-characteristic__text" name="isbn" placeholder="ISBN"  value={ isbnValue } onChange={changeIsbn} />
                    <textarea className="book-characteristic__annotation book-characteristic__text" name="annotation" placeholder="Аннотация"  value={ annotationValue } onChange={changeAnnotation}/>
                    <input className="book-characteristic__picture book-characteristic__text" name="picture" placeholder="URL обложки книги"  value={ coverValue } onChange={changeCover} />
                    <div className="book-characteristic__header"> Выберите файл с текстом книги</div>
                    <input className="book-characteristic__file book-characteristic__text"
                           type="file"
                           value ={ textValue }
                           onChange={(e)=>handleFileBookChange(e)} required/>
                    <button className="book-characteristic__load">Загрузить</button>
                    <a href="" title="Закрыть" className="load-book__close">X</a>
                </form>
            </div>
        );
    }
}