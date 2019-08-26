import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../../story-container/storyContainer';
import Sidebar from './sidebar';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { LogoMenuItem, ProfileMenuItem, MenuItem, SwitchLab } from './../../menu-items'

const actions = {
    handleOnClick: action('handleOnClick')
};
storiesOf('Sidebar', module)
    .addDecorator(StoryContainer)
    .addDecorator(withKnobs)
    .addDecorator(withInfo({
        text: 'String or React Element with docs about my component',
    }))
    .add(
        'Left Sidebar',
        () =>
            <Sidebar {...actions}
                primary={boolean('primary', true)} 
                secondary={boolean('secondary', false)}>
                <LogoMenuItem />
                <ProfileMenuItem user={{}} />
                <MenuItem options={{
                    displayName: "Dashboard",
                    to: "/dashboard",
                    icons: { normal: "Dadhboard_White.png", hover: "Dadhboard_Cyan.png" },
                }} />
                <MenuItem options={{
                    displayName: "ELN",
                    to: "/eln",
                    icons: "fal fa-flask",
                }} />
                <MenuItem options={{
                    displayName: "Inventory",
                    to: "/inv",
                    icons: "fal fa-boxes",
                }} />
                <MenuItem options={{
                    displayName: "Equipment",
                    to: "/equipment",
                    icons: "fal fa-microscope",
                }}/>
                <MenuItem options={{
                    displayName: "Add User",
                    to: "/addMember",
                    icons: "fal fa-user-plus",
                }} />
                <MenuItem options={{
                    displayName: "Switch Labs",
                    icons: "fal fa-exchange",
                }}>
                    <SwitchLab options={{
                        to: "/context-switch",
                        items: [{ displayName: "RE", color: "red" }, { displayName: "LL", color: "blue" }],
                        useDesignSystemConsts: true
                    }} />
                </MenuItem>
                <MenuItem options={{
                    displayName: "Settings",
                    to: "/settings",
                    icons: "fal fa-cog",
                }} />
                <MenuItem options={{
                    displayName: "Signout",
                    icons: "fal fa-sign-out",
                }} />
            </Sidebar>
    );