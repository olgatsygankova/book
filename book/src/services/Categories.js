import {Component} from "react";
import getCategories from "./getCategories";
import getBooks from "./getBooks";
import Books from "./Books"

const Category = function(id, bookName) {
    //Значения переданные пользователем
    /*  this._id = id;*/
    /*this._category = category;*/
    this._books = new Books();
}



export default Category