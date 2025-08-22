import type { Meta, StoryObj } from '@storybook/react-vite';
import { MockupContainer } from '../../mockups/MockupContainer';
import { DesktopLayout } from '../../patterns/Layouts/DesktopLayout';
import { ScreenTitle } from '../../components/ScreenTitle/ScreenTitle';
import { RecentlyPlayed } from '../../patterns/Playlists/RecentlyPlayed/RecentlyPlayed';
import { Recommendation } from '../../patterns/Playlists/Recommendation/Recommendation';
import { times } from 'lodash';
import { MobileLayout } from '../../patterns/Layouts/MobileLayout';
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup';

const meta: Meta = {
  title: 'Screens/Start',
};

export default meta;
type Story = StoryObj;

export const desktop: Story = {
  render: () => (
    <MockupContainer device="desktop">
      <DesktopLayout activeItemIndex={0}>
        <ScreenTitle size="large" textLength={40} />
        <RecentlyPlayed textLength={30} className="mb-4" />
        {times(5, (i) => (
          <Recommendation key={i} textLength={20} className="mb-4" />
        ))}
      </DesktopLayout>
    </MockupContainer>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-8562&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};

export const Mobile: Story = {
  render: () => (
    <MockupContainer device="mobile">
      <MobileLayout
        headerSlot={() => (
          <ScreenTitle size="medium" textLength={40} numberOfActions={3} />
        )}
        stickySlot={() => <ButtonGroup numberOfButtons={2} />}
        activeItemIndex={0}
      >
        <RecentlyPlayed isMobile textLength={20} />
        {times(5, (i) => (
          <Recommendation key={i} isMobile textLength={30} />
        ))}
      </MobileLayout>
    </MockupContainer>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-10802&mode=design&t=2wCJKB0RZhQTeUPc-4',
    },
  },
};
