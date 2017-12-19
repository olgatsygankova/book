import React, { Component } from 'react';
import './stars.less';

export default class Stars extends Component {
    render() {
        return (
            <div className="stars">
                <div className="stars__star--fat" />
                <div className="stars__star--fat" />
                <div className="stars__star--fat" />
                <div className="stars__star--light" />
                <div className="stars__star--light" />
            </div>
        );
    };
}
