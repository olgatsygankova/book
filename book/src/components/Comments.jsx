import React, {Component} from 'react';
import './comments.less';
import PropTypes from 'prop-types';

export default class Comments extends Component {
    static propTypes = {
        comment: PropTypes.array
    };

    static defaultProps = {
        comment: [{}],
    };

    render() {
        const {comment} = this.props;
        return (
            <div className="comments">
                {
                    comment ? comment.map((comment, j) => {
                        return <Comment username={comment.username} date='12' comment={comment.comment}key={j} />
                    }) : <Comment key={0} />
                }
            </div>
        )
    }
}

const Comment = (props) => <div className="comment">
    <div className="comment__header">
        <span className="comment__user">{props.username}</span>
        <span className="comment__date">{props.date}</span>
    </div>
    <span className="comment__text">{props.comment}</span>
</div>;


