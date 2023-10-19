import { twMerge } from 'tailwind-merge';
import { Diamond } from '../components/Icon/Diamond';
import type { DeviceTypes } from '../types';

type MockupContainerProps = DeviceTypes & {
  children: React.ReactElement;
};

export const MockupContainer = ({
  device = 'mobile',
  children,
}: MockupContainerProps) => {
  return (
    <div
      className={twMerge(
        `overflow-hidden border-4 rounded-lg inline-block border-neutral-900 bg-neutral-900 ${
          device === 'desktop' ? 'border-t-0' : 'border-8 rounded-3xl'
        }`
      )}
    >
      {device === 'desktop' && (
        <div className="flex gap-1">
          <Diamond className="fill-danger-500 w-4" />
          <Diamond className="fill-warning-500 w-4" />
          <Diamond className="fill-success-500 w-4" />
        </div>
      )}
      {device === 'mobile' && (
        <div className="m-auto mb-2 bg-neutral-500 rounded-full h-2 w-10" />
      )}

      <div>{children}</div>
    </div>
  );
};
