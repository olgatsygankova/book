import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import BookDescription from './containers/BookDescription';
import SectionBooks from './components/SectionBooks';
import Office from './components/OfficePage';

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/book/:id" component={BookDescription}/>
                <Route path="/category/:id" component={SectionBooks}/>
                <Route path="/office" component={Office}/>
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root'));






