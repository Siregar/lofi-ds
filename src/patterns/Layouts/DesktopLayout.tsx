import { PropsWithChildren } from 'react';
import { SideNav } from '../Navigations/SideNav/SideNav';
import { Header } from '../../components/Header/Header';
import { SongControlBar } from '../Controls/SongControlBar/SongControlBar';
import type { ActiveItem, HeaderSlot } from '../../types';

export const DesktopLayout: React.FC<
  PropsWithChildren & HeaderSlot & ActiveItem
> = ({ children, activeItemIndex = 0, headerSlot }) => (
  <div className="w-[800px] bg-neutral-800">
    <div className="flex">
      <SideNav activeItemIndex={activeItemIndex} />
      <div className="w-full p-2 pb-0">
        <Header headerSlot={headerSlot} />
        <div className="h-[434px] overflow-auto flex flex-col">{children}</div>
      </div>
    </div>
    <SongControlBar />
  </div>
);
