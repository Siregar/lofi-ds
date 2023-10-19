import type { Meta, StoryObj } from '@storybook/react';
import { SideNav } from './SideNav';

const meta: Meta<typeof SideNav> = {
  component: SideNav,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-4291&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideNav>;

export const Desktop: Story = {
  args: {
    activeItemIndex: 0,
  },
};
