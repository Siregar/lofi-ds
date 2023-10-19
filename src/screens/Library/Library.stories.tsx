import type { Meta, StoryObj } from '@storybook/react';
import { MockupContainer } from '../../mockups/MockupContainer';
import { DesktopLayout } from '../../patterns/Layouts/DesktopLayout';
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup';
import { Overview } from '../../patterns/Playlists/Overview/Overview';
import { MobileLayout } from '../../patterns/Layouts/MobileLayout';
import { ScreenTitle } from '../../components/ScreenTitle/ScreenTitle';

const meta: Meta = {
  title: 'Screens/Library',
};

export default meta;
type Story = StoryObj;

export const Desktop: Story = {
  render: () => (
    <MockupContainer device="desktop">
      <DesktopLayout
        activeItemIndex={2}
        headerSlot={() => <ButtonGroup noMargin numberOfButtons={4} />}
      >
        <ScreenTitle size="medium" textLength={40} hasSearch hasDropdown />
        <Overview />
      </DesktopLayout>
    </MockupContainer>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-6746&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};

export const Mobile: Story = {
  render: () => (
    <MockupContainer device="mobile">
      <MobileLayout
        headerSlot={() => (
          <ScreenTitle
            hasUser
            size="medium"
            variant="light"
            textLength={40}
            numberOfActions={2}
          />
        )}
        stickySlot={() => <ButtonGroup numberOfButtons={2} />}
        activeItemIndex={2}
      >
        <Overview isMobile />
      </MobileLayout>
    </MockupContainer>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WeAreDevelopers-Spotify-Demo?type=design&node-id=1406-9512&mode=design',
    },
  },
};
