import React from 'react';
import './comments.less';

const Comments = () => <div className="comments">
    <Comment />
</div>;

const Comment = () => <div className="comment">
    <div className="comment__header">
        <span className="comment__user">Александр</span>
        <span className="comment__date">27.11.2017 11:37</span>
    </div>
    <span className="comment__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor condimentum dui eget vehicula. Pellentesque urna felis, commodo ut semper ac, feugiat porta urna.</span>
</div>;

export default Comments;



