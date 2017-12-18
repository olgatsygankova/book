import React, { Component } from 'react';
import './stars.less';

class Stars extends Component {
    render() {
        return (
            <div className="stars">
                <div className="stars__star--fat"></div>
                <div className="stars__star--fat"></div>
                <div className="stars__star--fat"></div>
                <div className="stars__star--light"></div>
                <div className="stars__star--light"></div>
            </div>
        );
    };
}

export default Stars;


