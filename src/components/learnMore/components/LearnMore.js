import React from 'react';

import { Icon } from 'antd';

import { LEARN_MORE_CLASSNAMES, LERAN_MORE_DATA } from '../constants';

const { HEADER, IMAGE, TEXT, BODY, ICON } = LEARN_MORE_CLASSNAMES;

const learn_more = LERAN_MORE_DATA.map(({ key, image, header, body }) => (
    <div className={BODY} key={key}>
        <div className={IMAGE}>
            <Icon className={ICON} type={image} />
        </div>
        <div className={TEXT}>
            <h1>{header}</h1>
            <h3>{body}</h3>
        </div>
    </div> 
)); 

class LearnMore extends React.Component {
    render() {
        return (
            <div>
                <div className={HEADER}>
                </div>
                {learn_more}
            </div>
        );
    }
}

export default LearnMore;
