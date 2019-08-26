import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from '../../story-container/storyContainer';
import Toggle from './toggle';

storiesOf('Toggle', module)
    .addDecorator(StoryContainer)
    .addDecorator(withKnobs)
    .addDecorator(withInfo({
        text: `Toggle styled component`,
    }))
    .add(
        'Toggle',
        () =>
            <Toggle disabled={boolean('disabled', false)} />
    );