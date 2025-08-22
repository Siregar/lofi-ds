import type { Meta, StoryObj } from '@storybook/react-vite';
import { DesktopLayout } from './DesktopLayout';
import { MockupContainer } from '../../mockups/MockupContainer';

const meta: Meta<typeof DesktopLayout> = {
  component: DesktopLayout,
  title: 'Patterns/Layouts/Apps',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WeAreDevelopers-Spotify-Demo?type=design&node-id=1628-4497&mode=design&t=eLY8OqBfsfxdUPv5-4',
    },
  },
  decorators: [
    (Story) => (
      <MockupContainer device="desktop">
        <Story />
      </MockupContainer>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DesktopLayout>;

export const Desktop: Story = {
  args: {},
};
