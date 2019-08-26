import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from '../../story-container/storyContainer';
import Tags from './tags';

storiesOf('Tags', module)
    .addDecorator(StoryContainer)
    .addDecorator(withKnobs)
    .addDecorator(withInfo({
        text: `Tags styled component`,
    }))
    .add(
        'Tags',
        () =>
            <Tags 
                disabled={boolean('disabled', false)} 
                inline={boolean('inline', true)} 
                label={text('label', 'UserName')} />
    );