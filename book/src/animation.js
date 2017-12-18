import React, { Component } from 'react';
import logo from './logo.svg';
import './animation.less';

class Animation extends Component {
    render() {
        return (
            <div className="header__animation animations">
                <div className="animation--gray"></div>
                <div className="animation--orange-back"></div>
                <div className="animation--white"></div>
                <div className="animation--gray-back"></div>
                <div className="animation--orange"></div>
                <div className="animation--white-back"></div>
            </div>
        );
    };
}

export default Animation;