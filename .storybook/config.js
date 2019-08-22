import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  // require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  header: false, // Toggles display of header with component name and description
});

configure(loadStories, module);
