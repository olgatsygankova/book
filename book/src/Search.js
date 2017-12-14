import React, { Component } from 'react';
/*import './search.less';*/

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input className="search__input" type="search" name="search" placeholder="Поиск..." />
            </div>
        );
    };
}

export default Search;