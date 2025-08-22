import type { Meta, StoryObj } from '@storybook/react-vite';
import { SongControlBar } from './SongControlBar';

const meta: Meta<typeof SongControlBar> = {
  component: SongControlBar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-6446&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[830px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SongControlBar>;

export const Desktop: Story = {
  args: {},
};
