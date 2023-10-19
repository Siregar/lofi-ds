import type { Meta, StoryObj } from '@storybook/react';
import { RecentlyPlayed } from './RecentlyPlayed';

const meta: Meta<typeof RecentlyPlayed> = {
  component: RecentlyPlayed,
  args: {
    numberOfCards: 6,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-6745&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RecentlyPlayed>;

export const Desktop: Story = {
  args: {},
};

export const Mobile: Story = {
  args: {
    isMobile: true,
    textLength: 20,
  },
};
