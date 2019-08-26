import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from '../../story-container/storyContainer';

import Bubble from './bubble';

storiesOf('Bubble', module)
    .addDecorator(StoryContainer)
    .addDecorator(withKnobs)
    .addDecorator(withInfo({
        text: `Bubble styled component`,
    }))
    .add(
        'Bubble',
        () =>
            <Bubble
                disabled={boolean('Disabled', false)}
                default={boolean('default', false)}
                info={boolean('info', false)}
                active={boolean('active', true)}>
                {text('Label', '2')}
            </Bubble>
    );