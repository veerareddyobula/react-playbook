import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import {
    SidebarStyledComponent,
    SidebarItems,
} from './sidebar.theme'

const Sidebar = (props) => {
    const { handleOnClick } = props;
    return (
        <SidebarStyledComponent height={['100vh']} width={['60px']} {...props}>
            <SidebarItems {...props}>
                {
                    Array.isArray(props.children) ? (
                        props.children.map((child) => {
                            return React.cloneElement(child, { ...child.props, key: shortid.generate(), handleOnClick, primary: props.primary, secondary: props.secondary })
                        })
                    ) : (
                            React.cloneElement(props.children, { ...props.children.props, handleOnClick, primary: props.primary, secondary: props.secondary })
                        )
                }
            </SidebarItems>
        </SidebarStyledComponent>
    )
};

Sidebar.propTypes = {
    handleOnClick: PropTypes.func,
}

export default Sidebar;