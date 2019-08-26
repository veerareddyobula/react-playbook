import React from 'react';
import { PropTypes } from 'prop-types';
import { Flex, InputTextArea } from './textAreaField.theme';

const TextAreaField = (props) => {
    const {inline, label, labelClass, className, ...others} = props;
    return (
        <Flex width={[1]} {...props}>
            <label className={labelClass}>{label}</label>
            <InputTextArea width={[1]} type="text" height={['2.5rem']} className={`form-control ${className}`} {...others} />
            <p className="error-msg m-0">{props.errormessage}</p>
        </Flex>
    )
}

TextAreaField.propTypes = {
    label: PropTypes.string,
    labelClass: PropTypes.string,
    disabled: PropTypes.bool,
    inline: PropTypes.bool
};
TextAreaField.defaultProps = {
    disabled: false,
    inline: true
};

export default TextAreaField;