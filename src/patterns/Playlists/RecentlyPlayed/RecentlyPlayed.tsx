import { times } from 'lodash';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';
import { Card } from '../../../components/Card/Card';
import { TextLength, IsMobile } from '../../../types';

export const cardGridStyles = cva('grid gap-2', {
  variants: {
    isMobile: {
      true: 'grid-cols-2 mx-2',
      false: 'grid-cols-3',
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});

export type RecentlyPlayedProps = IsMobile &
  TextLength & {
    className?: string;
    numberOfCards?: number;
  };

export const RecentlyPlayed = ({
  className,
  numberOfCards = 6,
  isMobile = false,
  textLength,
}: RecentlyPlayedProps) => (
  <div className={twMerge(cardGridStyles({ isMobile, className }))}>
    {times(numberOfCards, (i) => (
      <Card textLength={textLength} key={i} size="small" isMobile={isMobile} />
    ))}
  </div>
);
