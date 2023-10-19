import type { Meta, StoryObj } from '@storybook/react';
import { MobileLayout } from './MobileLayout';
import { MockupContainer } from '../../mockups/MockupContainer';

const meta: Meta<typeof MobileLayout> = {
  component: MobileLayout,
  title: 'Patterns/Layouts/Apps',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WeAreDevelopers-Spotify-Demo?type=design&node-id=1711-4698&mode=design&t=eLY8OqBfsfxdUPv5-4',
    },
  },
  decorators: [
    (Story) => (
      <MockupContainer device="mobile">
        <Story />
      </MockupContainer>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileLayout>;

export const Mobile: Story = {
  args: {},
};
