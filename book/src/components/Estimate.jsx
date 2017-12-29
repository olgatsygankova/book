import React, { Component } from 'react';
import './estimate.less';
import './stars.less';

export default class Estimate extends Component {
    render() {
        return (
            <div className="estimate">
                <span className="estimate__header">Ваша оценка:</span>
                <div className="stars estimate__stars">
                    <input type="radio" id="5" name="stars" value="5" />
                    <label className="stars__star" htmlFor="5" />
                    <input type="radio" id="4" name="stars" value="4" />
                    <label className="stars__star" htmlFor="4" />
                    <input type="radio" id="3" name="stars" value="3" />
                    <label className="stars__star" htmlFor="3" />
                    <input type="radio" id="2" name="stars" value="2" />
                    <label className="stars__star" htmlFor="2" />
                    <input type="radio" id="1" name="stars" value="1" />
                    <label className="stars__star" htmlFor="1"/>
                </div>
            </div>
        );
    }
}