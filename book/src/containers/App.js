import React, {Component} from 'react';
import registerServiceWorker from '../registerServiceWorker';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SectionBooks from "../components/SectionBooks";
import Home from "./Home";
import ReadBook from "../components/ReadBook";
import BookDescription from "./BookDescription";
import Office from "../components/OfficePage";
import FadeIn from "../components/FadeIn";

const Opacity = ({component: Component, transition, ...all}) => (
    <Route render={(matchProps) => (
        <FadeIn transition={transition}>
            <Component {...matchProps} />
        </FadeIn>
    )} {...all} />
);

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Opacity exact path="/" component={Home}/>
                    <Switch>
                        <Opacity path="/book/:id" component={BookDescription}/>
                        <Opacity path="/category/:id" component={SectionBooks}/>
                        <Opacity path="/office" component={Office}/>
                        <Opacity path="/search/:text" component={Home}/>
                        <Opacity path="/:text/category/:id" component={SectionBooks}/>
                        <Opacity path="/read/:id" component={ReadBook}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}
registerServiceWorker();
