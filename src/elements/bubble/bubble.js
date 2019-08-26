/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { BubbleStyledComponent } from './bubble.theme.js';

const Bubble = (props) => {
    return (
        <BubbleStyledComponent {...props}>
            {props.children}
        </BubbleStyledComponent>
    )
};

Bubble.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    warning: PropTypes.bool,
    info: PropTypes.bool,
    link: PropTypes.bool,
}

export default Bubble;