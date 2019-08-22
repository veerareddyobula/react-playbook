import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import HomeLogo from './homeLogo';

storiesOf('Logo', module)
.add(
  'Home Logo',
  withInfo({
    styles: {
      header: {
        h1: {
          color: 'red'
        }
      }
    },
    text: 'String or React Element with docs about my component',
  })(() =>
    <HomeLogo />
  ),
  { notes: 'A very simple component' }
);