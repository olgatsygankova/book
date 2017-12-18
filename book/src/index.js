import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import BookDescription from './BookDescription';
import {BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/book-description" component={BookDescription}/>
            <Footer />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();



