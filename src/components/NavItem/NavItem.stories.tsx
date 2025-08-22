import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavItem } from './NavItem';
import { Diamond } from '../Icon/Diamond';

const meta: Meta<typeof NavItem> = {
  component: NavItem,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1401-3619&mode=design&t=H9pTjQZu4pesiUBn-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const WithIcon: Story = {
  args: {
    iconSlot: Diamond,
  },
};
