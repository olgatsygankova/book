import React, { Component } from 'react';
import SectionBooks from '../components/SectionBooks';
import './home.less';
import getBooks from '../services/getBooks';

/*var getStateFromFlax = () => {
    return {
        books: LibraryStore().books
    }
}*/

export default class Home extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount() {
        getBooks().then(
            books => {
                this.setState({
                    books: books
                })
            }
        );
    }
    /*  render() {
          const { categoryId } = this.props.match.params;
          const { books } = this.state;

      /*   componentWillMount() {
             addEventListener('change', this._onChange, false);
         }

         _onChange(){
             this.setState(getStateFromFlax());
         }*/
    render() {
        return (
            <main>
                <section className="main__content">
                    <SectionBooks />
                    <SectionBooks />
                    <SectionBooks />
                </section>
            </main>
        );
    }
}
