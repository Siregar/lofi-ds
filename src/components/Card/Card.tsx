import { cva, type VariantProps } from 'class-variance-authority';
import { Cover } from '../Cover/Cover';
import { Text } from '../Text/Text';
import { twMerge } from 'tailwind-merge';
import { CaretRight } from '../Icon/CaretRight';
import { IconButton } from '../IconButton/IconButton';
import type { TextLength, IsMobile } from '../../types';
import { SongTitle } from '../SongTitle/SongTitle';

const containerStyles = cva(
  'inline-flex bg-neutral-700 hover:bg-neutral-600 overflow-hidden rounded cursor-pointer group',
  {
    variants: {
      size: {
        small: '',
        medium: 'flex-col',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const coverStyles = cva('', {
  variants: {
    size: {
      small: 'flex-shrink-0',
      medium: 'w-auto ',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerStyles> &
  TextLength &
  IsMobile;

export const Card = ({
  size = 'medium',
  textLength = 30,
  isMobile = false,
  className,
}: CardProps) => (
  <div className={twMerge(containerStyles({ size, className }))}>
    <div className="relative">
      <Cover size={size} className={twMerge(coverStyles({ size }))} />
      {size === 'medium' && !isMobile ? (
        <IconButton
          iconSlot={CaretRight}
          size="small"
          variant="primary"
          className="invisible group-hover:visible absolute bottom-0 right-0 m-1"
        />
      ) : null}
    </div>
    <div className="flex flex-col justify-center flex-1 gap-2 p-[10px] relative">
      {size === 'medium' ? (
        <SongTitle textLength={textLength} />
      ) : (
        <Text variant="light" textLength={textLength} className="max-w-full" />
      )}
      {size === 'small' && !isMobile ? (
        <IconButton
          iconSlot={CaretRight}
          size="small"
          variant="primary"
          className="invisible group-hover:visible absolute right-0 m-1"
        />
      ) : null}
    </div>
  </div>
);
