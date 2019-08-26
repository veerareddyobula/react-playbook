import React from 'react';
import PropTypes from 'prop-types';
import { ActiveStyleComponent, ProfileImage, ItemStyle } from './../menuItem.theme';

const ProfileMenuItem = (props) => {
    const { user: { profilePic }, handleOnClick } = props && props.user ? props : {}
    return (
        <ItemStyle>
            <ActiveStyleComponent onClick={(event)=>handleOnClick(event, "/profile")}>
                <ProfileImage
                    src={
                        profilePic
                            ? `data:image/png;base64, ${profilePic}`
                            : 'assets/sidebar/upload.png'
                    }
                    title="Profile"
                    alt="upload"
                />
            </ActiveStyleComponent>
        </ItemStyle>
    )
}

ProfileMenuItem.propTypes = {
    user: PropTypes.shape({
        profilePic: PropTypes.string,
        activePendingLabs: PropTypes.bool
    }),
    handleOnClick: PropTypes.func,
}

export default ProfileMenuItem;