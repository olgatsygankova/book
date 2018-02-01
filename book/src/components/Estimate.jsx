import React, { Component } from 'react';
import './stars.less';
import './estimate.less';
import PropTypes from 'prop-types';
import { checkAuth } from "../services/AuthenticationService";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setEstimate } from '../actions/index';
import { myEstimate } from '../services/BooksService';

export default class Estimate extends Component {

    static propTypes = {
        estimate: PropTypes.number
    };
    render() {
        const {estimate} = this.props;
        return (
            <div className="estimate" >
                <span className="estimate__header">Ваша оценка:</span>
                <div className="stars estimate__stars">
                    <input type="radio" id="5" name="stars" value="5" defaultChecked={estimate == 5 ? true : false}  onClick={(e)=>this.props.setEstimate(this.props.bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="5" />
                    <input type="radio" id="4" name="stars" value="4" defaultChecked={estimate == 4 ? true : false} onClick={(e)=>this.props.setEstimate(this.props.bookId, +e.target.value)}/>
                    <label className="stars__star stars__star--light" htmlFor="4" />
                    <input type="radio" id="3" name="stars" value="3" defaultChecked={estimate == 3 ? true : false} onClick={(e)=>this.props.setEstimate(this.props.bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="3" />
                    <input type="radio" id="2" name="stars" value="2" defaultChecked={estimate == 2 ? true : false} onClick={(e)=>this.props.setEstimate(this.props.bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="2" />
                    <input type="radio" id="1" name="stars" value="1" defaultChecked={estimate ==1 ? true : false} onClick={(e)=>this.props.setEstimate(this.props.bookId, +e.target.value)}/>
                    <label className= "stars__star stars__star--light" htmlFor="1" />
                </div>
            </div>
        );
    };
}