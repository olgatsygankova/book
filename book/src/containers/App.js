import React, {Component} from 'react';
import registerServiceWorker from '../registerServiceWorker';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
registerServiceWorker();
