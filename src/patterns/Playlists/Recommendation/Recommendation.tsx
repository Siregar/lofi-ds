import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { times } from 'lodash';
import { Card } from '../../../components/Card/Card';
import { Text } from '../../../components/Text/Text';
import { TextLength, IsMobile } from '../../../types';

export const cardGroupStyles = cva('gap-x-2', {
  variants: {
    isMobile: {
      true: 'flex gap-x-2 w-fit',
      false: 'grid grid-cols-6',
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});

export const cardStyles = cva('', {
  variants: {
    isMobile: {
      true: 'w-[120px] first-of-type:ml-2 last-of-type:mr-2',
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});

export type RecommendationProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardStyles> &
  TextLength &
  IsMobile & {
    className?: string;
    numberOfCards?: number;
  };

export const Recommendation = ({
  numberOfCards = 6,
  className,
  isMobile = false,
  textLength = 20,
}: RecommendationProps) => (
  <div className={className}>
    <div className="flex items-end justify-between mb-4">
      <Text
        size="medium"
        textLength={textLength}
        className={twMerge(isMobile ? 'ml-2' : '')}
      />
      {!isMobile && (
        <Text size="small" textLength={textLength} className="cursor-pointer" />
      )}
    </div>
    <div className="overflow-auto">
      <div className={cardGroupStyles({ isMobile })}>
        {times(numberOfCards, (i) => (
          <Card
            key={i}
            textLength={(textLength as number) / 2}
            className={cardStyles({ isMobile })}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  </div>
);
