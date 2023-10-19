import type { Meta, StoryObj } from '@storybook/react';
import { SongTitle } from './SongTitle';

const meta: Meta<typeof SongTitle> = {
  component: SongTitle,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1402-3740&mode=design&t=H9pTjQZu4pesiUBn-4',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SongTitle>;

export const Default: Story = {
  args: {
    textLength: 20,
  },
};

export const HasLike: Story = {
  args: {
    textLength: 20,
    hasLike: true,
  },
};
