import type { Meta, StoryObj } from '@storybook/react';
import { MiniSongControlBar } from './MiniSongControlBar';

const meta: Meta<typeof MiniSongControlBar> = {
  component: MiniSongControlBar,
  title: 'Patterns/Controls/MiniSongControlBar',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1402-3922&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[374px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MiniSongControlBar>;

export const Mobile: Story = {
  args: {},
};
