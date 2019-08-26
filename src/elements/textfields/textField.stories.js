import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from '../../story-container/storyContainer';
import TextField from './textField';

storiesOf('TextField', module)
    .addDecorator(StoryContainer)
    .addDecorator(withKnobs)
    .addDecorator(withInfo({
        text: `TextField styled component`,
    }))
    .add(
        'TextField',
        () =>
            <TextField 
                disabled={boolean('disabled', false)} 
                inline={boolean('inline', true)} 
                label={text('label', 'UserName')} />
    );