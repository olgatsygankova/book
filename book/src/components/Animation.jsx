import React from 'react';
import './animation.less';

const AnimationCell = (props) => {
    return <div className={props.className} key={props.key} />
};

let animationClass = ['animation--gray', 'animation--orange-back', 'animation--white', 'animation--gray-back', 'animation--orange', 'animation--white-back'];
let animations = [];
for (let i = 0; i < animationClass.length; i++) {
    animations[i] = AnimationCell({className: animationClass[i], key: i});
}

const Animation = () => {
    return (<div className='header__animation animations'>
        {animations}
    </div>
    )
};

export default Animation;