import React from 'react';
import PropTypes from 'prop-types';
import {TagsStyledComponent} from './tags.theme'

const Tag = ({className, children, outline, disabled, dismissible, removeTag, ...props }) => {
    const classes = `
                    tag 
                    ${outline && 'outline'} 
                    ${disabled && 'disabled'}
                    ${disabled && outline && 'disabled-outline'}
                    ${className} `;
    return (
        <TagsStyledComponent className={classes} {...props}>
            <span className={`tag-content ${outline && 'outline-content'}`}>
                <div className="tag-label">{children}</div>
            </span>
            {dismissible
                && <div className="tag-icon">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>}
        </TagsStyledComponent>
    )
}

Tag.propTypes = {
    className: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    removeTag: PropTypes.func,
    dismissible: PropTypes.bool
};
Tag.defaultProps = {
    outline: false,
    disabled: false,
    dismissible: true
};
export default Tag;
