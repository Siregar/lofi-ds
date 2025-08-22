import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1402-3565&mode=design&t=H9pTjQZu4pesiUBn-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    textLength: 30,
  },
};
