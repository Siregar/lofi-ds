import type { Meta, StoryObj } from '@storybook/react';
import { Cover } from './Cover';

const meta: Meta<typeof Cover> = {
  component: Cover,
  argTypes: {
    size: {
      control: 'radio',
      options: ['tiny', 'small', 'medium', 'large'],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1401-3912&mode=design&t=H9pTjQZu4pesiUBn-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cover>;

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
