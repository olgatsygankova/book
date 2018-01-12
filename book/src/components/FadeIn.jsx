import React, {Component} from 'react';

export default class FadeIn extends Component {
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
