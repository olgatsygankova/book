import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/index';
import registerServiceWorker from '../registerServiceWorker';
import Header from './Header';
import Footer from './Footer';
import {Route, Switch, Router} from 'react-router-dom';
import SectionBooks from "./SectionBooks";
import Home from "./Home";
import ReadBook from "./ReadBook";
import BookDescription from "./BookDescription";
import Office from "./OfficePage";
import FadeIn from "../components/FadeIn";
import { Info } from "../components/Info";
import { history } from '../history';

const Opacity = ({component: Component, transition, ...all}) => (
    <Route render={(matchProps) => (
        <FadeIn transition={transition}>
            <Component {...matchProps} />
        </FadeIn>
    )} {...all} />
);
const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={ history }>
                    <div className="container">
                        <Header/>
                        <Opacity exact path="/" component={Home}/>
                        <Switch>
                            <Opacity path="/book/:id" component={BookDescription}/>
                            <Opacity path="/category/:id" component={SectionBooks}/>
                            <Opacity path="/user" component={Office}/>
                            <Opacity path="/search/:text" component={Home}/>
                            <Opacity path="/:text/category/:id" component={SectionBooks}/>
                            <Opacity path="/read/:id" component={ReadBook}/>
                            <Opacity path="/read/:id" component={ReadBook}/>
                            <Opacity path="/info" component={Info}/>
                        </Switch>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}
registerServiceWorker();
