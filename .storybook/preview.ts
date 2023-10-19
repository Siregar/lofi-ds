import type { Preview } from '@storybook/react';
import tokens from '../src/theme';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: tokens.colors.neutral[800],
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Style guide', 'Components', 'Patterns', 'Screens'],
        method: 'alphabetical',
      },
    },
  },
};

export default preview;
