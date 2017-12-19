import React, { Component } from 'react';
import './estimate.less';
import Stars from './Stars';

export default class Estimate extends Component {
    render() {
        return (
            <div className="estimate">
                <span className="estimate__header">Ваша оценка:</span>
                <Stars />
            </div>
        );
    };
}