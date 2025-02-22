import { load, addParameters } from '@storybook/rax';

addParameters({
  options: {
    name: 'Rax Kitchen Sink',
    url: 'https://github.com/storybookjs/storybook/tree/master/examples/rax-kitchen-sink',
    goFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: false,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
  },
});

// automatically import all story js files that end with *.stories.js
load(require.context('../stories', true, /\.stories\.js$/), module);
