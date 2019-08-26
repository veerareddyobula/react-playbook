import React from 'react';
import PropTypes from 'prop-types';
import {
    ActiveStyleComponent,
    MenuIconStyleComponent,
    ItemStyle,
    SubMenuStyledComponent,
    DisplayName
} from './../menuItem.theme';

const MenuItem = (props) => {
    const [showSubMenu, setShowSubMenu] = React.useState(false);
    const { options, handleOnClick } = props;
    const { icons } = options
    let doChildPresent = false;
    if(props.children || Array.isArray(props.children)){
        doChildPresent = true;
    }else {
        doChildPresent = false;
    }
    return (
        <ActiveStyleComponent
            onClick={(event) => handleOnClick(event, options)}
            showSubMenu={showSubMenu}
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}>
            <ItemStyle>
                {
                    (typeof (icons) === 'string') ? (
                        <i className={icons} />
                    ) : (
                            <MenuIconStyleComponent {...props} />
                        )
                }
                <DisplayName className="m-0 menu-helper">{options.displayName}</DisplayName>
                {
                    doChildPresent && showSubMenu ? <SubMenuStyledComponent>{props.children}</SubMenuStyledComponent> : ''
                }
            </ItemStyle>
        </ActiveStyleComponent>
    )
}

MenuItem.propTypes = {
    options: PropTypes.shape({
        displayName: PropTypes.string,
        to: PropTypes.string,
        icons: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                normal: PropTypes.string,
                hover: PropTypes.string,
            })
        ]),
    }),
    handleOnClick: PropTypes.func,
}

export default MenuItem;