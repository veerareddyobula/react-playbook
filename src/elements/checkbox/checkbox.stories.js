import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from '../../story-container/storyContainer';
import Checkbox from './checkbox';

storiesOf('Checkbox', module)
    .addDecorator(StoryContainer)
    .addDecorator(withKnobs)
    .addDecorator(withInfo({
        text: `Checkbox styled component`,
    }))
    .add(
        'Checkbox',
        () =>
            <Checkbox disabled={boolean('disabled', false)}>
                {text('Label', 'Show only my reservations')}
            </Checkbox>
    );