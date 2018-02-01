import React, { Component } from 'react';
import './stars.less';
import PropTypes from 'prop-types';

/*export default class Stars extends Component {
    static propTypes = {
        estimate: PropTypes.number
    };
    render() {
        const {estimate} = this.props;
        const OneStar = ({estimate}) => {
            if (estimate<1 || isNaN(estimate)){
                return (
                    <label className="stars__star--light" />
                );
            }
            else {
                return <label className="stars__star--fat" />
            }
        };
        return (
            <div className="stars">
                <input type="radio" id="5" name="stars" value="5" onClick={this.onEstimateBtnClick}/>
                <OneStar estimate = {estimate} />
                <input type="radio" id="5" name="stars" value="4" onClick={this.onEstimateBtnClick}/>
                <OneStar estimate = {estimate-1} />
                <input type="radio" id="5" name="stars" value="3" onClick={this.onEstimateBtnClick}/>
                <OneStar estimate = {estimate-2} />
                <input type="radio" id="5" name="stars" value="2" onClick={this.onEstimateBtnClick}/>
                <OneStar estimate = {estimate-3} />
                <input type="radio" id="5" name="stars" value="1" onClick={this.onEstimateBtnClick}/>
                <OneStar estimate = {estimate-4} />
            </div>
        );
    };
}*/

/*<input type="radio" id="5" name="stars" value="5" onClick={this.onEstimateBtnClick}/>
<label className="stars__star" htmlFor="5" />*/

export default class Stars extends Component {
    static propTypes = {
        estimate: PropTypes.number
    };
    render() {
        const {estimate} = this.props;
        const OneStar = ({estimate}) => {
            if (estimate<1 || isNaN(estimate)){
                return (
                    <div className="stars__star--light" />
                );
            }
            else {
                return (<div className="stars__star--fat" />)
            }
        };
        return (
            <div className="stars">
                <OneStar estimate = {estimate} />
                <OneStar estimate = {estimate-1} />
                <OneStar estimate = {estimate-2} />
                <OneStar estimate = {estimate-3} />
                <OneStar estimate = {estimate-4} />
            </div>
        );
    };
}