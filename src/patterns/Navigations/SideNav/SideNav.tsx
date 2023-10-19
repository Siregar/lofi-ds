import { times } from 'lodash';
import { Cover } from '../../../components/Cover/Cover';
import { Diamond } from '../../../components/Icon/Diamond';
import { House } from '../../../components/Icon/House';
import { Library } from '../../../components/Icon/Library';
import { Search } from '../../../components/Icon/Search';
import { NavItem } from '../../../components/NavItem/NavItem';

export type SideNavProps = {
  activeItemIndex: number;
};

export const SideNav = ({ activeItemIndex }: SideNavProps) => (
  <div className="inline-block bg-neutral-600 border-r-neutral-700">
    {[House, Search, Library, Diamond, Diamond].map((icon, index) => (
      <NavItem
        key={index}
        iconSlot={icon}
        isActive={activeItemIndex === index ? true : false}
      />
    ))}
    <div className="h-0.5 bg-neutral-700 mx-2" />
    <div className="overflow-auto h-[152px]">
      {times(10, (i) => (
        <NavItem key={i} />
      ))}
    </div>
    <Cover size="large" />
  </div>
);
