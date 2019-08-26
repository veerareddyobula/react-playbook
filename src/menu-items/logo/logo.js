import React from 'react';
import PropTypes from 'prop-types';
import { ActiveStyleComponent, LogoImg } from './../menuItem.theme';

const LogoMenuItem = (props) => {
    const { handleOnClick } = props;
    return (
        <div>
            <ActiveStyleComponent onClick={(event) => handleOnClick(event, "/dashboard")}>
                {' '}
                <LogoImg src="assets/sidebar/BL.png" alt="Logo" width="60vw" />
            </ActiveStyleComponent>
        </div>
    )
}

LogoMenuItem.propTypes = {
    handleOnClick: PropTypes.func,
}

export default LogoMenuItem;