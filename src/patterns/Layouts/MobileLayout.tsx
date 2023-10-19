import React, { PropsWithChildren } from 'react';
import { TabBar } from '../../components/TabBar/TabBar';
import { MiniSongControlBar } from '../Controls/MiniSongControlBar/MiniSongControlBar';
import type { ActiveItem } from '../../types';

type MobileLayoutProps = ActiveItem & {
  stickySlot?: React.ComponentType<any>;
  headerSlot?: React.ComponentType<any>;
};

export const MobileLayout: React.FC<PropsWithChildren & MobileLayoutProps> = ({
  children,
  headerSlot: HeaderSlot,
  stickySlot: StickySlot,
  activeItemIndex,
}) => {
  return (
    <div className="w-[300px] bg-neutral-800">
      <div className="flex">
        <div className="overflow-auto w-full">
          {HeaderSlot ? (
            <div className="pt-4 pb-2 px-2">
              <HeaderSlot />
            </div>
          ) : null}

          {StickySlot ? (
            <div className="sticky top-0 z-10 bg-neutral-800 px-2 py-1">
              <StickySlot />
            </div>
          ) : null}

          <div className="h-[400px] flex flex-col gap-y-4">{children}</div>
        </div>
      </div>
      <MiniSongControlBar />
      <TabBar activeItemIndex={activeItemIndex} textLength={10} />
    </div>
  );
};
