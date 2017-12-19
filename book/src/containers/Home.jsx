import React, { Component } from 'react';
import SectionBooks from '../components/SectionBooks';
import './home.less';

/*var getStateFromFlax = () => {
    return {
        books: LibraryStore().books
    }
}*/

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: this.props
        }
    }

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

/* <div className="container">*/