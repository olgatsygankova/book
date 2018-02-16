import React, { Component } from 'react';
import './stars.less';
import './estimate.less';
import PropTypes from 'prop-types';

export default class Estimate extends Component {
    static propTypes = {
        estimate: PropTypes.number
    };
    render() {
        const estimate = this.props;
        console.log("fdf", estimate)
        return (
            <div className="estimate" >
                <span className="estimate__header">Ваша оценка:</span>
                <div className="stars estimate__stars">
                    <input type="radio" id="5" name="stars" value="5" checked={estimate.estimate === 5}  onClick={(e)=>estimate.setEstimate(estimate.bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="5" />
                    <input type="radio" id="4" name="stars" value="4" checked={estimate.estimate === 4} onClick={(e)=>estimate.setEstimate(estimate.bookId, +e.target.value)}/>
                    <label className="stars__star stars__star--light" htmlFor="4" />
                    <input type="radio" id="3" name="stars" value="3" checked={estimate.estimate === 3} onClick={(e)=>estimate.setEstimate(estimate.bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="3" />
                    <input type="radio" id="2" name="stars" value="2" checked={estimate.estimate === 2} onClick={(e)=>estimate.setEstimate(estimate.bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="2" />
                    <input type="radio" id="1" name="stars" value="1" checked={estimate.estimate === 1} onClick={(e)=>estimate.setEstimate(estimate.bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="1" />
                </div>
            </div>
        );
    };
}
