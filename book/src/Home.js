import React, { Component } from 'react';
import Header from './Header';
import SectionBooks from './SectionBooks';
import Footer from './Footer';
import './styles.less';

/*var getStateFromFlax = () => {
    return {
        books: LibraryStore().books
    }
}*/

class Home extends Component {
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
            <div className="container">
                <main>
                    <section className="main__content">
                        <SectionBooks />
                        <SectionBooks />
                        <SectionBooks />
                    </section>
                </main>
           </div>
        );
    }
}

export default Home;