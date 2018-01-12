import React, {Component} from 'react';
import './comments.less';
import PropTypes from 'prop-types';

export default class Comments extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    static defaultProps = {
        comments: [{}],
    };

    render() {
        const {comments} = this.props;
        return (
            <div className="comments">
                {
                    comments ? comments.map((comments, j) => {
                        return <Comment user={comments.user} date={comments.date} comment={comments.text}key={j} />
                    }) : <Comment key={0} />
                }
            </div>
        )
    }
}

const Comment = (props) => <div className="comment">
    <div className="comment__header">
        <span className="comment__user">{props.user}</span>
        <span className="comment__date">{props.date}</span>
    </div>
    <span className="comment__text">{props.comment}</span>
</div>;


