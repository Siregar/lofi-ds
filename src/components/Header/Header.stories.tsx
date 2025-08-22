import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-6590&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};

export const WithCategories: Story = {
  args: {
    headerSlot: () => <ButtonGroup />,
  },
};
