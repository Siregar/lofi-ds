import { ChevronLeft } from '../Icon/ChevronLeft';
import { ChevronRight } from '../Icon/ChevronRight';
import { IconButton } from '../IconButton/IconButton';
import { UserMenu } from '../UserMenu/UserMenu';
import type { HeaderSlot } from '../../types';

export type HeaderProps = HeaderSlot;

export const Header = ({ headerSlot: HeaderSlot }: HeaderProps) => (
  <div className="flex items-center pb-2">
    <div className="inline-flex gap-4 mr-4">
      <IconButton iconSlot={ChevronLeft} variant="secondary" size="small" />
      <IconButton iconSlot={ChevronRight} variant="secondary" size="small" />
    </div>
    <div className="flex items-center flex-grow">
      {HeaderSlot && <HeaderSlot />}
    </div>
    <UserMenu />
  </div>
);
