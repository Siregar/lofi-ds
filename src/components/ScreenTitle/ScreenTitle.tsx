import { times } from 'lodash';
import { Dropdown } from '../Dropdown/Dropdown';
import { Diamond } from '../Icon/Diamond';
import { Search } from '../Icon/Search';
import { User } from '../Icon/User';
import { Text, type TextProps } from '../Text/Text';

export type ScreenTitleProps = TextProps & {
  hasSearch?: boolean;
  hasDropdown?: boolean;
  hasUser?: boolean;
  numberOfActions?: number | undefined;
};

export const ScreenTitle = ({
  variant = 'light',
  size = 'medium',
  hasSearch,
  hasDropdown,
  textLength = 40,
  hasUser,
  numberOfActions,
}: ScreenTitleProps) =>
  numberOfActions ? (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        {hasUser && <User />}
        <Text size={size} variant={variant} textLength={textLength} />
      </div>
      {numberOfActions ? (
        <div className="flex">
          {times(numberOfActions, (i) => (
            <Diamond key={i} className="fill-white" />
          ))}
        </div>
      ) : null}
    </div>
  ) : (
    <div className="flex items-center justify-between mb-4">
      <Text size={size} variant={variant} textLength={textLength} />
      <div className="flex">
        {hasSearch && <Search className="fill-neutral-50" />}
        {hasDropdown && <Dropdown textLength={(textLength as number) / 2.66} />}
      </div>
    </div>
  );
