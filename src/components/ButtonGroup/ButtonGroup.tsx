import { times } from 'lodash';
import { Button } from '../Button/Button';
import { twMerge } from 'tailwind-merge';

export type ButtonGroupProps = {
  numberOfButtons?: number;
  noMargin?: boolean;
};

export const ButtonGroup = ({
  numberOfButtons = 2,
  noMargin = false,
}: ButtonGroupProps) => (
  <div
    className={twMerge(
      `gap-x-2 inline-flex overflow-x-scroll w-full ${noMargin ? '' : 'my-2'}`
    )}
  >
    {times(numberOfButtons, (i) => (
      <Button key={i} size="small" textLength={15} />
    ))}
  </div>
);
