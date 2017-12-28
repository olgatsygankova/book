import React, { Component } from 'react';
import './stars.less';

export default class Stars extends Component {
    render() {
        const {estimate} = this.props;

        const OneStar = ({estimate}) => {
            if (estimate<1){
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
