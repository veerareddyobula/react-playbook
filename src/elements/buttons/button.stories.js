import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from '../../story-container/storyContainer';

import Button from './button';

storiesOf('Button', module)
  .addDecorator(StoryContainer)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({
    text: `Button styled component`,
  }))
  .add(
    'Buttons',
    () =>
      <Button
        disabled={boolean('Disabled', false)}
        primary={boolean('primary', false)}
        warning={boolean('warning', false)}
        info={boolean('info', false)}
        link={boolean('link', false)}
        onClick={action('Hello...I am Click Event')}>
        {text('Label', 'Hello Styled-Component!!')}
      </Button>
  );