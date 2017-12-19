import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import BookDescription from './containers/BookDescription';

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/book-description" component={BookDescription}/>
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root'));






