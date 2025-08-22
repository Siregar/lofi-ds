import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlaybackControl } from './PlaybackControl';

const meta: Meta<typeof PlaybackControl> = {
  component: PlaybackControl,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1402-3921&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-neutral-800 inline-block p-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PlaybackControl>;

export const Desktop: Story = {
  args: {},
};
