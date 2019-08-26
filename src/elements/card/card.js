import React from 'react';
import { PropTypes } from 'prop-types';
import {CardStyledComponent} from './card.theme'

const Card = (props) => {
    const { className } = props;
    return (
        <CardStyledComponent width={['40em', '52em', '64em']} {...props} className={`card card-body ${className}`}>
            {props.children}
        </CardStyledComponent>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    shadow: PropTypes.bool,
    active: PropTypes.bool
};
Card.defaultProps = {};
export default Card;