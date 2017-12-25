import getBooks from "./getBooks";


const Book = function(id, bookName)
{
    //Значения переданные пользователем
    this._id = id;
    this._bookName = bookName;

};

export default Book