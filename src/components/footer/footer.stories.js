import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryContainer from '../../story-container/storyContainer';
import Footer from './footer';

storiesOf('Footer', module)
  .addDecorator(StoryContainer)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({
    text: 'String or React Element with docs about my component',
  }))
  .add(
    'Footer',
    () =>
      <Footer footerQuote={text('footerQuote', "Copyright © 2019 Merck KGaA, Darmstadt, Germany. All Rights Reserved.")} />
  );