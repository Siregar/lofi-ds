import { House } from '../Icon/House';
import { Library } from '../Icon/Library';
import { Search } from '../Icon/Search';
import { Text } from '../Text/Text';
import type { ActiveItem, TextLength } from '../../types';

export const TabBar = ({
  activeItemIndex,
  textLength = 5,
}: ActiveItem & TextLength) => (
  <div className="flex justify-evenly pb-2 bg-neutral-600">
    {[House, Search, Library].map((Icon, index) => (
      <div key={index} className="flex flex-col items-center">
        <Icon
          className={`m-1 ${
            activeItemIndex === index ? 'fill-neutral-50' : 'fill-neutral-400'
          }`}
        />
        <Text
          size="tiny"
          textLength={textLength}
          variant={activeItemIndex === index ? 'light' : 'dark'}
        />
      </div>
    ))}
  </div>
);
