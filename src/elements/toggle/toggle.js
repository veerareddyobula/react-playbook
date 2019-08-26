import React from 'react';
import PropTypes from 'prop-types';
import {ToggleStyledComponent} from './toggle.theme';

const Toggle = ({ checked, className, children, disabled, withIcon, ...props }) => {
    return (
        <ToggleStyledComponent className={`${className} ${withIcon}`}>

            <label>
                <input
                    disabled={disabled}
                    type="checkbox"
                    {...props}
                    checked={checked}
                />

                <span></span>
                {children}
            </label>
        </ToggleStyledComponent>
    );
}

Toggle.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    withIcon: PropTypes.bool
};
Toggle.defaultProps = {
    disabled: false,
    withIcon: false
};
export default Toggle;
