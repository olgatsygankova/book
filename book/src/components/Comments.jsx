import React, {Component} from 'react';
import './comments.less';
import PropTypes from 'prop-types';

export default class Comments extends Component {
    static defaultProps = {
        comments: [{}],
    };

    render() {
        const {comments} = this.props;
        let content = comments ? comments.map((comments, j) => {
            return (
                <Comment user={comments.user} date={comments.date} comment={comments.text}key={j} />
            );
        }): <Comment key={0} />;
        return (
            <div className="comments">
                {content}
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

Comments.propTypes = {
    Comments: PropTypes.object,
};
