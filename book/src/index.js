import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import BookDescription from './containers/BookDescription';
import Office from './components/OfficePage';

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/book-description" component={BookDescription}/>
                <Route path="/office" component={Office}/>
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root'));






