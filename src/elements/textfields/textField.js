import React from 'react';
import { PropTypes } from 'prop-types';
import { Flex, InputText } from './textField.theme';

const TextField = (props) => {
    const {inline, label, labelClass, className, ...others} = props;
    return (
        <Flex width={[1]} {...props}>
            <label className={labelClass}>{label}</label>
            <InputText type="text" width={[1]} height={['2.5rem']} className={`form-control ${className}`} {...others} />
            <p className="error-msg m-0">{props.errormessage}</p>
        </Flex>
    )
}

TextField.propTypes = {
    label: PropTypes.string,
    labelClass: PropTypes.string,
    disabled: PropTypes.bool,
    inline: PropTypes.bool
};
TextField.defaultProps = {
    disabled: false,
    inline: true
};

export default TextField;