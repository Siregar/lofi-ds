import type { Meta, StoryObj } from '@storybook/react';
import { UserMenu } from './UserMenu';

const meta: Meta<typeof UserMenu> = {
  component: UserMenu,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1403-4073&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserMenu>;

export const Desktop: Story = {
  args: {},
};
