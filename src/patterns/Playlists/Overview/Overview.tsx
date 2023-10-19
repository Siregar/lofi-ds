import { times } from 'lodash';
import { Card } from '../../../components/Card/Card';
import { VariantProps, cva } from 'class-variance-authority';

const containerStyles = cva('', {
  variants: {
    isMobile: {
      true: 'basis-1/2',
      false: 'grid-cols-6',
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});

export type OverviewProps = VariantProps<typeof containerStyles>;

export const Overview = ({ isMobile }: OverviewProps) => (
  <>
    {isMobile ? (
      <div className="flex flex-row gap-2 px-2">
        {times(2, (i) => (
          <div key={i} className="basis-1/2">
            {times(5, (i) => (
              <Card key={i} textLength={15} className="w-full mb-2" />
            ))}
          </div>
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-6 gap-2 w-full">
        {!isMobile && <Card textLength={20} className="col-span-2" />}
        {times(22, (i) => (
          <div key={i} className="basis-1/2">
            <Card textLength={10} className="w-full" />
          </div>
        ))}
      </div>
    )}
  </>
);
