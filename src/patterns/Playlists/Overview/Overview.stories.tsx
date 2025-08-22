import type { Meta, StoryObj } from '@storybook/react-vite';
import { Overview } from './Overview';

const meta: Meta<typeof Overview> = {
  component: Overview,
  argTypes: {
    isMobile: {
      control: 'boolean',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-10351&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Overview>;

export const Desktop: Story = {
  args: { isMobile: false },
};

export const Mobile: Story = {
  args: { isMobile: true },
};
