import React, { Component } from 'react';
import './load-book.less';
import './book-characteristic.less';
//import { CheckBoxList } from 'react-checkbox-list';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


export default class LoadBook extends Component {

    render() {
        let categoriesName = this.props.categoriesName;
        let content = categoriesName ? categoriesName.map((categoriesName, j) => {
            return (
                <label key={j}><Checkbox value={categoriesName.id} />{categoriesName.name}</label>
            );
        }):  '';
        return (
            <div id="load-book" className={this.props.className}>
                <a href="" title="Закрыть" className="load-book__close">X</a>
                <form className="book-characteristic">
                    <input className="book-characteristic__title book-characteristic__text" name="title" placeholder="Название"  value={ this.props.titleValue } onChange={this.props.changeTitle} required />
                    <input className="book-characteristic__author book-characteristic__text" name="author" placeholder="Автор"  value={ this.props.authorValue } onChange={this.props.changeAuthor} required/>
                    <CheckboxGroup name="categories" value={this.props.genreValue} onChange={this.props.changeGenre} required> {content} </CheckboxGroup>
                    <input className="book-characteristic__isbn book-characteristic__text" name="isbn" placeholder="ISBN"  value={ this.props.isbnValue } onChange={this.props.changeIsbn} />
                    <textarea className="book-characteristic__annotation book-characteristic__text" name="annotation" placeholder="Аннотация"  value={ this.props.annotationValue } onChange={this.props.changeAnnotation}/>
                    <input className="book-characteristic__picture book-characteristic__text" name="picture" placeholder="URL обложки книги"  value={ this.props.coverValue } onChange={this.props.changeCover} />
                    <input className="book-characteristic__file book-characteristic__text"
                           type="file"
                           value ={ this.props.textValue }
                           onChange={(e)=>this.props.handleFileBookChange(e)} />
                    <button className="book-characteristic__load" onClick = {this.props.loadNewBook}>Загрузить</button>
                </form>
            </div>
        );
    }
}


/* <input className="book-characteristic__genre book-characteristic__text" name="genre" placeholder="Жанр"  value={ this.props.genreValue } onChange={this.props.changeGenre} required/>*/

/*<input className="book-characteristic__file book-characteristic__text" name="file" placeholder="Выберите файл" />
  <div className="book-characteristic__load-picture" />*/

/*<div className="book-characteristic__load-picture" />*/


/*<input className="book-characteristic__file book-characteristic__text"
                           type="file"
                           value ={ this.props.textValue }
                           onChange={(e)=>this.props.handleFileBookChange(e)} />*/


/*   <div>
                        <CheckBoxList ref="chkboxList" defaultData={data} onChange={this.handleCheckboxListChange} />
                    </div>
*/