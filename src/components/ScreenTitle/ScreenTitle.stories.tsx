import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScreenTitle } from './ScreenTitle';

const meta: Meta<typeof ScreenTitle> = {
  component: ScreenTitle,
  args: {
    size: 'medium',
    variant: 'light',
    textLength: 40,
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['tiny', 'small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    numberOfActions: { control: 'number' },
    hasUser: {
      control: 'boolean',
      if: { arg: 'numberOfActions', truthy: true },
    },
    hasSearch: {
      control: 'boolean',
      if: { arg: 'numberOfActions', truthy: false },
    },
    hasDropdown: {
      control: 'boolean',
      if: { arg: 'numberOfActions', truthy: false },
    },
  },
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
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1402-3689&mode=design&t=H9pTjQZu4pesiUBn-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScreenTitle>;

export const Desktop: Story = {
  args: {
    numberOfActions: 3,
    hasSearch: true,
    hasDropdown: true,
  },
};

export const Mobile: Story = {
  args: {
    numberOfActions: 2,
    hasUser: true,
  },
};
