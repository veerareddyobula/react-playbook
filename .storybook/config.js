import { configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-pro/css/all.min.css';
import $ from 'jquery';

window.$ = $;
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  // require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

withInfo({
  header: false, // Toggles display of header with component name and description
});

configure(loadStories, module);
