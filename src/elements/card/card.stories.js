import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from '../../story-container/storyContainer';

import Card from './card';
storiesOf('Card', module)
    .addDecorator(StoryContainer)
    .addDecorator(withKnobs)
    .addDecorator(withInfo({
        text: `Card Body to display content in card style. Please note card-body does not have card-header`,
    }))
    .add(
        'Card',
        () =>
            <Card shadow={boolean('shadow', true)} active={boolean('active', true)}>
                {text('Content', 'Hello Styled-Component!!')}
            </Card>
    );