import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './button';

storiesOf('Button', module)
.add(
  'Buttons',
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
    <Button />
  ),
  { notes: 'A very simple component' }
);