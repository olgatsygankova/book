import React, { Component } from 'react';
import './stars.less';
import './estimate.less';
import PropTypes from 'prop-types';

export default class Estimate extends Component {
    static propTypes = {
        estimate: PropTypes.number
    };
    render() {
        const {estimate, setEstimate, bookId} = this.props;
        return (
            <div className="estimate" >
                <span className="estimate__header">Ваша оценка:</span>
                <div className="stars estimate__stars">
                    <input type="radio" id="5" name="stars" value="5" checked={estimate === 5} onChange={(e)=>setEstimate(bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="5" />
                    <input type="radio" id="4" name="stars" value="4" checked={estimate === 4} onChange={(e)=>setEstimate(bookId, +e.target.value)}/>
                    <label className="stars__star stars__star--light" htmlFor="4" />
                    <input type="radio" id="3" name="stars" value="3" checked={estimate === 3} onChange={(e)=>setEstimate(bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="3" />
                    <input type="radio" id="2" name="stars" value="2" checked={estimate === 2} onChange={(e)=>setEstimate(bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="2" />
                    <input type="radio" id="1" name="stars" value="1" checked={estimate === 1} onChange={(e)=>setEstimate(bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="1" />
                </div>
            </div>
        );
    };
}
