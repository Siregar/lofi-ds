import type { Meta, StoryObj } from '@storybook/react';
import { VolumeControl } from './VolumeControl';

const meta: Meta<typeof VolumeControl> = {
  title: 'components/VolumeControl',
  component: VolumeControl,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1402-3785&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof VolumeControl>;

export const Default: Story = {
  args: {},
};
