import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { Diamond } from '../Icon/Diamond';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  argTypes: {
    variant: {
      options: ['basic', 'primary', 'secondary'],
    },
    size: {
      options: ['small', 'medium'],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1401-3593&mode=design&t=H9pTjQZu4pesiUBn-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  args: {
    variant: 'basic',
    iconSlot: Diamond,
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    iconSlot: Diamond,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    iconSlot: Diamond,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    iconSlot: Diamond,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    iconSlot: Diamond,
  },
};
