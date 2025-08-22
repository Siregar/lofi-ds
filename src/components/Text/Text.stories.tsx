import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    textLength: 40,
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['tiny', 'small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=117-1216&mode=design&t=H9pTjQZu4pesiUBn-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Tiny: Story = {
  args: {
    size: 'tiny',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
