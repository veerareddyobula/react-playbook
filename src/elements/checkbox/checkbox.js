import React from 'react';
import { PropTypes } from 'prop-types';
import { CheckboxLabel } from './checkbox.theme'

const Checkbox = ({ checkboxClass, disabled, labelClass, children, ...props }) => {
    return (
        <CheckboxLabel className={`
                    ${labelClass} 
                    ${disabled && 'checkbox-disabled'} 
                `}>
            <input
                disabled={disabled}
                className={checkboxClass}
                type={'checkbox'}
                {...props} />
            <span className="checkmark"></span>
            {children}
        </CheckboxLabel>
    );
}

Checkbox.propTypes = {
    checkboxClass: PropTypes.string,
    labelClass: PropTypes.string,
    disabled: PropTypes.bool
};
Checkbox.defaultProps = {
    disabled: false
};

export default Checkbox;