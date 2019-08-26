import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../../story-container/storyContainer';
import HomeLogo from './homeLogo';

storiesOf('Logo', module)
  .addDecorator(StoryContainer)
  .addDecorator(withInfo({
    text: 'String or React Element with docs about my component',
  }))
  .add(
    'Home Logo',
    () =>
      <HomeLogo />
  );