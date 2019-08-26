/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import {Btn} from './button.theme.js';

const Button = (props) => {
    return (
        <Btn {...props}>
            {props.children}
        </Btn>
    )
};

Button.propTypes = {
    children: PropTypes.node
}

export default Button;