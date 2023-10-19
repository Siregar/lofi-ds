import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium'],
    },
    textLength: {
      control: 'number',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=2-32&mode=design&t=H9pTjQZu4pesiUBn-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    size: 'small',
    textLength: 30,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    textLength: 30,
  },
};
