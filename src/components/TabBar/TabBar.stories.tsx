import type { Meta, StoryObj } from '@storybook/react';
import { TabBar } from './TabBar';

const meta: Meta<typeof TabBar> = {
  component: TabBar,
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1402-3920&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

export const Mobile: Story = {
  args: {
    activeItemIndex: 0,
    textLength: 10,
  },
};
