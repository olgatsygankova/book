import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import BookDescription from './containers/BookDescription';
import SectionBooks from './components/SectionBooks';
import Office from './components/OfficePage';
import './index.less'

class FadeIn extends Component {

    componentDidMount() {
        window.setTimeout(() => {
            this._otherPage.className = "transition0 transition1";
        }, 1000 / 60);
    }

    render() {
        return (
            <div ref={ (div) => {
                this._otherPage = div
            } } className="transition0">
                { this.props.children }
            </div>
        )
    }
}

const Opacity = ({component: Component, transition, ...all}) => (
    <Route render={ (matchProps) => (
        <FadeIn transition={ transition }>
            <Component {...matchProps} />
        </FadeIn>
    ) } {...all} />
);

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <App>
                <Opacity exact path="/" component={ Home } />
                <Opacity path="/book/:id" component={ BookDescription }/>
                <Opacity path="/category/:id" component={ SectionBooks }/>
                <Opacity path="/office" component={ Office }/>
            </App>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));






/*<Route exact path='/' component={Home}/>*/