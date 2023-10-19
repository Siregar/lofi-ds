import type { Meta, StoryObj } from '@storybook/react';
import { Recommendation } from './Recommendation';

const meta: Meta<typeof Recommendation> = {
  component: Recommendation,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-6367&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Recommendation>;

export const Desktop: Story = {
  args: {
    numberOfCards: 6,
  },
};

export const Mobile: Story = {
  render: () => (
    <div className="w-[300px]">
      <Recommendation numberOfCards={4} isMobile={true} textLength={20} />
    </div>
  ),
};
