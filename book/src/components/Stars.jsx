import React, { Component } from 'react';
import './stars.less';
import PropTypes from 'prop-types';

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